'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _coBody = require('co-body');

var _coBody2 = _interopRequireDefault(_coBody);

var _koaMulter = require('koa-multer');

var _koaMulter2 = _interopRequireDefault(_koaMulter);

var _IndexControll = require('./IndexControll');

var _IndexControll2 = _interopRequireDefault(_IndexControll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init_router(app) {
	//模版渲染引擎配置  --->config/viewset.es配置文件
	app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
		root: _path2.default.join(__dirname + './../', 'view'),
		autoescape: true,
		ext: 'html'
	}));
	//初始化控制器
	var Index = new _IndexControll2.default();

	var router = (0, _koaRouter2.default)();
	app.use((0, _koaBodyparser2.default)());
	//初始化路由
	router.get('/', Index.index());
	router.get('/index.html', Index.index());
	router.post('/getData', Index.getDate());
	router.post('/deleData', Index.deletDate());
	app.use((0, _koaConvert2.default)(router.routes())).use((0, _koaConvert2.default)(router.allowedMethods()));
}
exports.default = init_router;
