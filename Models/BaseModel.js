mysql = require('mysql');
if(__testing)
    var connection = require(__base + '/database_test');
else 
    var connection = require(__base + '/database');


exports.mysql = mysql;

exports.get = function(res, executingQuery, parameters)
{
    connection.connection.query(executingQuery, parameters, function(error, rows, fields) 
    {  
        error == null ?  res.send(rows) : res.send(error);
    });
}

exports.send = function(res, executingQuery, parameters)
{
    connection.connection.query(executingQuery, parameters, function(error, result)
    {
        error == null ? res.send("Affected rows: " + result.affectedRows) : res.send(error);
    });
}

exports.getData = function(res, executingQuery, callback, parameters)
{
    connection.connection.query(executingQuery, parameters, function(error, rows, fields) 
    {
        if(error == null) {
            return callback(rows.slice());
        } else { 
            res.send(error);
        }
    });
}
