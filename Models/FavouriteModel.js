var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, 'SELECT * from Favourites');
    },

    show: function(res, user_id)
    {
        baseModel.get(res, 'SELECT * from Favourites WHERE user_id = ' + user_id);
    },

    showOne: function(res, user_id, product_id)
    {
        baseModel.get(res, 'SELECT * from Favourites WHERE user_id = ' + user_id + ' AND product_id = ' + product_id);
    },

    getProducts: function(res, user_id)
    {
        baseModel.get(res, 'SELECT p.* from Favourites as f, Product as p WHERE user_id = '+ user_id +' AND f.product_id = p.product_id');
    },

    getUsers: function(res, product_id)
    {
        baseModel.get(res, 'SELECT u.* from User as u, Favourites as f WHERE f.product_id = '+ product_id +' AND f.user_id = u.user_id');
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
        baseModel.send(res, 'DELETE FROM Favourites WHERE user_id = ' + user_id + ' AND product_id = ' + product_id);
    }
};