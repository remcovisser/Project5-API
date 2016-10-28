var connection = require(__base + '/database');
var returnData = "";

module.exports = {

    index: function() {
        connection.connection.query('SELECT * from User', function(err, rows, fields) {
            if (err) throw err;
            returnData = rows;
        });
        return returnData;
  },

    store: function(res, params) {
        connection.connection.query('INSERT INTO User(`username`, `password`, `email`, `date_of_birth`, `admin`) VALUES ("'+params.username+'", "'+params.password+'", "'+params.email+'", "'+params.date+'", 0)', function(err, rows, fields) {
            if (err) throw err;
        });
        res.send("Nice.");
    }

};