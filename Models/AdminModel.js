var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    registeredUsers: function(res)
    {
        var callback = function(data) {
            var parsedData = [];
            var users = [];
            var days = [];

            for(var i in data)
            {
                users.push(data[i].day);
                days.push(data[i].users);
            }
             parsedData.push({
                   "day" : days,
                   "users" : users
            });
            res.send(parsedData);
        };
        baseModel.getData(res, "SELECT x.create_date, COUNT(DISTINCT y.user_id) as users, DAY(x.create_date) as day FROM User x JOIN User y ON y.create_date <= x.create_date GROUP BY create_date;", callback);
    }
};