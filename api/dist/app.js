'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _ioredis = require('ioredis');

var _ioredis2 = _interopRequireDefault(_ioredis);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      this.expressApp = (0, _express2.default)();
      this.httpServer = _http2.default.Server(this.expressApp);
      this.io = (0, _socket2.default)(this.httpServer);
      this.redis = new _ioredis2.default();

      this.activeSockets = [];
      this.pendingEvents = [];

      this.createLogger();
      this.handleSockets();
      this.subscribeToEvents();
      this.createThrottler();
      this.handleMessages();
      this.handleError();
    }
  }, {
    key: 'createLogger',
    value: function createLogger() {
      this.logger = new _winston2.default.Logger({
        transports: [new _winston2.default.transports.Console({
          timestamp: function timestamp() {
            return new Date().toString();
          },
          colorize: true
        })]
      });
    }
  }, {
    key: 'handleSockets',
    value: function handleSockets() {
      var _this = this;

      this.io.on('connection', function (socket) {
        _this.activeSockets.push(socket);
        _this.logger.info('Socket connected. Active sockets:', _this.activeSockets.length);

        socket.on('disconnect', function () {
          _this.activeSockets.splice(_this.activeSockets.indexOf(socket), 1);
          _this.logger.info('Socket disconnected. Active sockets:', _this.activeSockets.length);
        });
      });
    }
  }, {
    key: 'subscribeToEvents',
    value: function subscribeToEvents() {
      var _this2 = this;

      this.redis.subscribe('events', function (err, count) {
        if (err) {
          _this2.logger.error('Failed subscribing to events stream', err);
          return;
        }

        if (count !== 1) {
          _this2.logger.warn('Unexpected number of subscribed channels', count);
        }
      });
    }
  }, {
    key: 'createThrottler',
    value: function createThrottler() {
      var _this3 = this;

      this.emitPendingEvents = _lodash2.default.throttle(function () {
        if (_this3.pendingEvents.length === 0) {
          return;
        }

        _this3.logger.info('Emitting %d events to %d sockets', _this3.pendingEvents.length, _this3.activeSockets.length);

        _lodash2.default.each(_this3.activeSockets, function (socket) {
          socket.emit('events', _this3.pendingEvents);
        });

        _this3.pendingEvents.splice(0, _this3.pendingEvents.length);
      }, _constants.THROTTLE_WAIT);
    }
  }, {
    key: 'handleMessages',
    value: function handleMessages() {
      var _this4 = this;

      this.redis.on('message', function (channel, message) {
        if (channel !== 'events') {
          _this4.logger.warn('Unexpected message to channel', channel, message);
          return;
        }

        _this4.emitPendingEvents();
        _this4.pendingEvents.unshift(JSON.parse(message));
      });
    }
  }, {
    key: 'handleError',
    value: function handleError() {
      var _this5 = this;

      this.redis.on('error', function (error) {
        _this5.logger.error('Redis', error);

        _lodash2.default.each(_this5.activeSockets, function (socket) {
          socket.emit('error', error);
        });
      });
    }
  }, {
    key: 'run',
    value: function run(port) {
      this.httpServer.listen(port);
      this.logger.info('Server initialized on port', port);
    }
  }]);

  return App;
}();

exports.default = App;