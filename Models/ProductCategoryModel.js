var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Product_has_category WHERE boolean_deleted = 0");
    },

    getProducts: function(res, category_id)
    {
        baseModel.get(res, "SELECT p.* FROM Product as p, Product_has_category as phc WHERE phc.category_id = "+category_id+" AND phc.product_id = p.product_id AND phc.boolean_deleted = 0 AND p.boolean_deleted = 0");
    },

    getCategories: function(res, product_id)
    {
        baseModel.get(res, "SELECT c.* FROM Category as c, Product_has_category as phc WHERE phc.product_id = "+product_id+" AND phc.category_id = c.category_id  AND phc.boolean_deleted = 0 AND c.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Product_has_category (product_id, category_id) VALUES ("+params.product_id+", "+params.category_id+")");
    },

    update: function(res, params, product_id, category_id)
    {
        baseModel.send(res, "UPDATE Product_has_category SET product_id="+params.product_id+", category_id="+params.category_id+" WHERE product_id = "+product_id+" AND category_id = "+category_id+"");
    },

    destroy: function(res, product_id, category_id)
    {
        baseModel.send(res, "UPDATE Product_has_category SET boolean_deleted = 1 WHERE product_id = "+product_id+" AND category_id = "+category_id+"");
    }
};