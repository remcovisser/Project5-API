var connection = require(__base + '/database');
var returnData = "";

module.exports = {

    index: function() {
        connection.connection.query('SELECT * from User', function(err, rows, fields) {
            if (err) throw err;
            returnData = rows;
        });
        return returnData;
  }

};