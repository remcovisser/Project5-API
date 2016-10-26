var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '95.85.32.165',
  user     : 'root',
  password : 'root',
  database : 'project5'
});

connection.connect();

module.exports = {
    connection: connection
};

//connection.end();