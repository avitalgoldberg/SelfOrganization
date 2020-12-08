const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'mydb', 
    multipleStatements: true
});

const password = "123456789"

module.exports = { mysqlConnection, password };
