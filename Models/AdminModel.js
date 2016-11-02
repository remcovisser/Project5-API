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
    },

    bestSellingProducts: function(res, amount)
    {
        var callback = function(data) {
            var parsedData = [];
            var productnames = [];
            var amount = [];

            for(var i in data)
            {
                productnames.push(data[i].productname);
                amount.push(data[i].amount);
            }
             parsedData.push({
                   "productnames" : productnames,
                   "amount" : amount
            });
            res.send(parsedData);
        };

        baseModel.getData(res, "SELECT p.p_name as productname, COUNT(ol.product_id) as amount FROM Product as p, Order_lines as ol WHERE p.product_id = ol.product_id GROUP BY p.product_id ORDER BY amount DESC LIMIT "+ amount, callback);
    },

    sumOrders: function(res)
    {
        var callback = function(data) {
         
        };

        baseModel.getData(res, "SELECT x.create_date, COUNT(DISTINCT y.user_id) as users, DAY(x.create_date) as day FROM User x JOIN User y ON y.create_date <= x.create_date GROUP BY create_date;", callback);
    }    
};