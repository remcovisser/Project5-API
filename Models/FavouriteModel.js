var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Favourites");
    },

    show: function(res, user_id)
    {
        baseModel.get(res, "SELECT f.product_id, p.p_name FROM Favourites as f, Product as p WHERE f.product_id = p.product_id AND user_id = "+baseModel.mysql.escape(user_id));
    },

    showOne: function(res, user_id, product_id)
    {
        baseModel.get(res, "SELECT * from Favourites WHERE user_id = " + baseModel.mysql.escape(user_id) + " AND product_id = " + baseModel.mysql.escape(product_id));
    },

    getProducts: function(res, user_id)
    {
        baseModel.get(res, "SELECT p.* from Favourites as f, Product as p WHERE f.user_id = "+ baseModel.mysql.escape(user_id) +" AND f.product_id = p.product_id AND p.boolean_deleted = 0");
    },

    getUsers: function(res, product_id)
    {
        baseModel.get(res, "SELECT u.* from User as u, Favourites as f WHERE f.product_id = "+ baseModel.mysql.escape(product_id) +" AND f.user_id = u.user_id AND u.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Favourites SET ?", params);
    },

    update: function(res, params, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Favourites SET ? WHERE user_id = " + baseModel.mysql.escape(user_id) + " AND product_id = " + baseModel.mysql.escape(product_id), params);
    },

    destroy: function(res, user_id, product_id)
    {
        baseModel.send(res, "DELETE from Favourites WHERE user_id = " + baseModel.mysql.escape(user_id) + " AND product_id = " + baseModel.mysql.escape(product_id));
    }
};