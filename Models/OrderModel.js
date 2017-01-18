var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Orders WHERE boolean_deleted = 0");
    },

    last: function(res)
    {
        baseModel.get(res, "SELECT order_id from Orders WHERE boolean_deleted = 0 ORDER BY order_id DESC LIMIT 1");
    },

    user: function(res, user_id)
    {
        baseModel.get(res, "SELECT * from Orders WHERE user_id = "+baseModel.mysql.escape(user_id)+" AND  boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Orders WHERE order_id = "+baseModel.mysql.escape(id)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Orders SET ? ", params);
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Orders SET ? WHERE order_id = " + baseModel.mysql.escape(id), params);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Orders SET boolean_deleted = 1 WHERE order_id = " + baseModel.mysql.escape(id));
    },
};