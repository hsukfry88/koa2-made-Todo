"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mysqlPromise = require("mysql-promise");

var _mysqlPromise2 = _interopRequireDefault(_mysqlPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _mysqlPromise2.default)();
db.configure({
	"host": "localhost",
	"user": "root",
	"password": "root",
	"database": "Todo_db"
});

exports.default = db;
