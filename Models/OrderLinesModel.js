var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Order_lines WHERE boolean_deleted = 0");
    },

    show: function(res, product_id, order_id)
    {
        baseModel.get(res, "SELECT * from Order_lines WHERE product_id = "+product_id+" AND order_id = "+order_id+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Order_lines (product_id, order_id, quantity, product_price) VALUES ("+params.product_id+", "+params.order_id+", "+params.quantity+", "+params.product_price+")");
    },

    update: function(res, params, product_id, order_id)
    {
        baseModel.send(res, "UPDATE Order_lines SET quantity="+params.quantity+", product_price="+params.product_price+" WHERE product_id = "+product_id+" AND order_id = "+order_id);
    },

    destroy: function(res, product_id, order_id)
    {
        baseModel.send(res, "UPDATE Order_lines SET boolean_deleted = 1 WHERE product_id = "+product_id+" AND order_id = "+order_id);
    }
};