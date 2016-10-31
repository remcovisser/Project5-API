var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Favourites WHERE boolean_deleted = 0");
    },

    show: function(res, user_id)
    {
        baseModel.get(res, "SELECT * from Favourites WHERE user_id = "+user_id+" AND boolean_deleted = 0");
    },

    showOne: function(res, user_id, product_id)
    {
        baseModel.get(res, "SELECT * from Favourites WHERE user_id = " + user_id + " AND product_id = " + product_id + " AND boolean_deleted = 0");
    },

    getProducts: function(res, user_id)
    {
        baseModel.get(res, "SELECT p.* from Favourites as f, Product as p WHERE f.user_id = "+ user_id +" AND f.product_id = p.product_id AND f.boolean_deleted = 0 AND p.boolean_deleted = 0");
    },

    getUsers: function(res, product_id)
    {
        baseModel.get(res, "SELECT u.* from User as u, Favourites as f WHERE f.product_id = "+ product_id +" AND f.user_id = u.user_id AND u.boolean_deleted = 0 AND f.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Favourites (product_id, user_id) VALUES ('"+params.product_id+"', '"+params.user_id+"')");
    },

    update: function(res, params, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Favourites SET product_id="+params.product_id+", user_id="+params.user_id+"  WHERE user_id = " + user_id + " AND product_id = " + product_id);
    },

    destroy: function(res, user_id, product_id)
    {
        baseModel.send(res, "UPDATE Favourites SET boolean_deleted = 1 WHERE user_id = " + user_id + " AND product_id = " + product_id);
    }
};