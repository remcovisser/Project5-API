var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    registeredUsers: function(res)
    {
        var callback = function(data) {
            var parsedData = [];

            for(var i in data)
            {
                parsedData.push({
                   "day" : data[i].day,
                   "users" : data[i].users
                });
            }
            res.send(parsedData);
        };
        baseModel.getData(res, "SELECT x.create_date, COUNT(DISTINCT y.user_id) as users, DAY(x.create_date) as day FROM User x JOIN User y ON y.create_date <= x.create_date GROUP BY create_date;", callback);
    }
};