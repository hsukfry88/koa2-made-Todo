'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addlist = require('./../models/addlist');

var _addlist2 = _interopRequireDefault(_addlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemeModel = new _addlist2.default();

var IndexControll = function () {
	function IndexControll() {
		_classCallCheck(this, IndexControll);
	}

	_createClass(IndexControll, [{
		key: 'index',
		value: function index() {
			var _this = this;

			return function () {
				var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
					var tab, sql, items;
					return regeneratorRuntime.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									tab = 'list_tb';
									sql = 'SELECT * FROM ' + tab;
									_context.next = 4;
									return ItemeModel.selectData(sql, tab);

								case 4:
									items = _context.sent;
									_context.next = 7;
									return ctx.render('index', {
										title: 'Node.js ToDoList',
										intro: '输入今日待办事项',
										items: items
									});

								case 7:
									ctx.body = _context.sent;

								case 8:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, _this);
				}));

				return function (_x, _x2) {
					return _ref.apply(this, arguments);
				};
			}();
		}
	}, {
		key: 'getDate',
		value: function getDate() {
			var _this2 = this;

			return function () {
				var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
					var content, tab, sql, rows, r;
					return regeneratorRuntime.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									content = { content: ctx.request.body.item }, tab = 'list_tb', sql = 'INSERT INTO ' + tab + ' SET ?';
									//console.log(sql,tab,content);

									_context2.next = 3;
									return ItemeModel.addItems(sql, content, tab);

								case 3:
									rows = _context2.sent;
									r = rows[0][0];

									ctx.body = {
										id: r.id,
										content: r.content
									};
									//console.log(r);

								case 6:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, _this2);
				}));

				return function (_x3, _x4) {
					return _ref2.apply(this, arguments);
				};
			}();
		}
	}, {
		key: 'deletDate',
		value: function deletDate() {
			var _this3 = this;

			return function () {
				var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
					var id, tab, sql, rows;
					return regeneratorRuntime.wrap(function _callee3$(_context3) {
						while (1) {
							switch (_context3.prev = _context3.next) {
								case 0:
									id = ctx.request.body.id, tab = 'list_tb', sql = 'DELETE FROM ' + tab + ' WHERE id=\'' + id + '\'';
									_context3.next = 3;
									return ItemeModel.delet(sql);

								case 3:
									rows = _context3.sent;
									_context3.next = 6;
									return console.log(rows);

								case 6:
								case 'end':
									return _context3.stop();
							}
						}
					}, _callee3, _this3);
				}));

				return function (_x5, _x6) {
					return _ref3.apply(this, arguments);
				};
			}();
		}
	}]);

	return IndexControll;
}();

exports.default = IndexControll;
