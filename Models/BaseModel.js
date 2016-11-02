var connection = require(__base + '/database');

exports.get = function(res, executingQuery)
{
    connection.connection.query(executingQuery, function(error, rows, fields) 
    {
        error == null ? res.send(rows) : res.send(error);
    });
}

exports.send = function(res, executingQuery)
{
    connection.connection.query(executingQuery, function(error, result)
    {
        error == null ? res.send("Query has been executed") : res.send(error);
    });
}

exports.getData = function(res, executingQuery, callback)
{
    connection.connection.query(executingQuery, function(error, rows, fields) 
    {
        if(error == null) {
            return callback(rows.slice());
        } else { 
            res.send(error);
        }
    });
}
