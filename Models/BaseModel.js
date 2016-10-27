var connection = require(__base + '/database');

exports.selectData = function(res, query)
{
    connection.connection.query(query, function(err, rows, fields) 
    {
        err == null ? res.send(rows) : res.send("Shiet");
    });
}

exports.insertData = function(res, query)
{
    connection.connection.query(query, function(err, rows, fields)
    {
        err == null ? res.send(rows) : res.send("No data?!");
    });
}