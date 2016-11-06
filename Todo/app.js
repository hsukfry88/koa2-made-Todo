"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _controllesInit = require('./controlles/controlles-init');

var _controllesInit2 = _interopRequireDefault(_controllesInit);

var _conf = require('./config/conf.js');

var _conf2 = _interopRequireDefault(_conf);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

//配置静态资源
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(_path2.default.join(__dirname + '/public'))));
//app.use(koabody());

//调用路由
(0, _controllesInit2.default)(app);
//app.listen(3030);
module.exports = app.listen(4000);
