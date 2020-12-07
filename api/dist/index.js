'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _ioredis = require('ioredis');

var _ioredis2 = _interopRequireDefault(_ioredis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Server configuration
 */
/**
 * Dependencies
 */
var THROTTLE_WAIT = 2000;
var SERVER_PORT = 8080;

/**
 * Initialize the server
 */
var app = new _app2.default();
app.configure(new _ioredis2.default(), THROTTLE_WAIT);
app.run(SERVER_PORT);