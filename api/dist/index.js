'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _app2.default();

app.init();
app.run(_constants.SERVER_PORT);