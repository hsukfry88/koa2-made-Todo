import mysql from 'mysql-promise';

const db=mysql();
db.configure({
	"host": "localhost",
	"user": "root",
	"password": "root",
	"database": "Todo_db"
});

export default db;

