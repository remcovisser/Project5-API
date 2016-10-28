var connection = require(__base + '/database');

exports.get = function(res, query)
{
    connection.connection.query(query, function(error, rows, fields) 
    {
        error == null ? res.send(rows) : res.send(error);
    });
}

exports.send = function(res, query1)
{
    connection.connection.query(query1, function(error, result)
    {
        error == null ? res.send("Query has been executed") : res.send(error);
    });
}