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