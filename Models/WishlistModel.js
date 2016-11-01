var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Wishlist WHERE boolean_deleted = 0");
    },

    getUsers: function(res, product_id)
    {
        baseModel.get(res, "SELECT p.* FROM Product as p, Wishlist as w WHERE w.product_id = "+product_id+" AND w.product_id = p.product_id AND w.boolean_deleted = 0 AND p.boolean_deleted = 0");
    },

    getProducts: function(res, user_id)
    {
        baseModel.get(res, "SELECT u.* FROM User as u, Wishlist as w WHERE w.user_id = "+user_id+" AND w.user_id = u.user_id AND w.boolean_deleted = 0 AND u.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Wishlist (user_id, product_id, addition_date, hidden) VALUES ("+params.user_id+", "+params.product_id+", '"+params.addition_date+"', "+params.hidden+")");
    },

    update: function(res, params, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Wishlist SET addition_date='"+params.addition_date+"', hidden="+params.hidden+" WHERE user_id = "+user_id+" AND product_id = "+product_id+"");
    },

    destroy: function(res, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Wishlist SET boolean_deleted = 1 WHERE user_id = "+user_id+" AND product_id = "+product_id+"");
    }
};