'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemModel = function () {
		function ItemModel() {
				_classCallCheck(this, ItemModel);
		}

		_createClass(ItemModel, [{
				key: 'addItems',
				value: function () {
						var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(sql, val, tab) {
								var data;
								return regeneratorRuntime.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																_context.next = 2;
																return _connect2.default.query(sql, val).then(function () {
																		return _connect2.default.query('SELECT * FROM ' + tab + ' WHERE content = \'' + val.content + '\'');
																});

														case 2:
																data = _context.sent;
																return _context.abrupt('return', data);

														case 4:
														case 'end':
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						function addItems(_x, _x2, _x3) {
								return _ref.apply(this, arguments);
						}

						return addItems;
				}()
		}, {
				key: 'selectData',
				value: function () {
						var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(sql) {
								var data;
								return regeneratorRuntime.wrap(function _callee2$(_context2) {
										while (1) {
												switch (_context2.prev = _context2.next) {
														case 0:
																//console.log('111');
																data = _connect2.default.query(sql).spread(function (rows) {
																		return rows;
																});
																return _context2.abrupt('return', data);

														case 2:
														case 'end':
																return _context2.stop();
												}
										}
								}, _callee2, this);
						}));

						function selectData(_x4) {
								return _ref2.apply(this, arguments);
						}

						return selectData;
				}()
		}, {
				key: 'delet',
				value: function delet(sql) {
						_connect2.default.query(sql);
				}
		}]);

		return ItemModel;
}();

exports.default = ItemModel;
