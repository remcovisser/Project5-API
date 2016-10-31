var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Orders WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Orders WHERE order_id = "+id+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Orders (user_id, order_date, order_status) VALUES ("+params.user_id+", '"+params.order_date+"', "+params.order_status+")");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Orders SET user_id="+params.user_id+", order_date='"+params.order_date+"', order_status="+params.order_status+" WHERE order_id = " + id);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Orders SET boolean_deleted = 1 WHERE order_id = " + id);
    }
};