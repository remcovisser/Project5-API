var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Wishlist WHERE boolean_deleted = 0");
    },

    getUsers: function(res, product_id)
    {
        baseModel.get(res, "SELECT p.* FROM Product as p, Wishlist as w WHERE w.product_id = "+baseModel.mysql.escape(product_id)+" AND w.product_id = p.product_id AND w.boolean_deleted = 0 AND p.boolean_deleted = 0");
    },

    getProducts: function(res, user_id)
    {
        baseModel.get(res, "SELECT u.* FROM User as u, Wishlist as w WHERE w.user_id = "+baseModel.mysql.escape(user_id)+" AND w.user_id = u.user_id AND w.boolean_deleted = 0 AND u.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Wishlist SET ?", params);
    },

    update: function(res, params, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Wishlist SET ? WHERE user_id = "+user_id+" AND product_id = "+product_id, params);
    },

    destroy: function(res, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Wishlist SET boolean_deleted = 1 WHERE user_id = "+baseModel.mysql.escape(user_id)+" AND product_id = "+baseModel.mysql.escape(product_id));
    }
};