var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, 'SELECT * from Product');
    },

    show: function(res, id)
    {
        baseModel.get(res, 'SELECT * from Product WHERE product_id = ' + id);
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Product (p_name,p_description,p_price) VALUES ('"+params.p_name+"', '"+params.p_description+"', "+params.p_price+")");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Product SET p_name='"+params.p_name+"', p_description='"+params.p_description+"', p_price='"+params.p_price+"' WHERE product_id = " + id);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, 'DELETE FROM Product WHERE product_id = ' + id);
    }
};