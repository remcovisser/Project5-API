var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '95.85.32.165',
  user     : 'root',
  password : 'root',
  database : 'project5_test'
});

connection.connect();

module.exports = {
    connection: connection
};