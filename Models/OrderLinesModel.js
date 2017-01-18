var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Order_lines WHERE boolean_deleted = 0");
    },

    show: function(res, product_id, order_id)
    {
        baseModel.get(res, "SELECT * from Order_lines WHERE product_id = "+baseModel.mysql.escape(product_id)+" AND order_id = "+baseModel.mysql.escape(order_id)+" AND boolean_deleted = 0");
    },

    showAll: function(res, order_id)
    {
        baseModel.get(res, "SELECT * from Order_lines WHERE order_id = "+baseModel.mysql.escape(order_id)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Order_lines SET ?", params);
    },

    update: function(res, params, product_id, order_id)
    {
        baseModel.send(res, "UPDATE Order_lines SET ? WHERE product_id = "+baseModel.mysql.escape(product_id)+" AND order_id = "+baseModel.mysql.escape(order_id), params);
    },

    destroy: function(res, product_id, order_id)
    {
        baseModel.send(res, "UPDATE Order_lines SET boolean_deleted = 1 WHERE product_id = "+baseModel.mysql.escape(product_id)+" AND order_id = "+baseModel.mysql.escape(order_id));
    }
};