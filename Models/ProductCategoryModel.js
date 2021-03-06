var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Product_has_category WHERE boolean_deleted = 0");
    },

    getProducts: function(res, category_id)
    {
        baseModel.get(res, "SELECT p.* FROM Product as p, Product_has_category as phc WHERE phc.category_id = "+baseModel.mysql.escape(category_id)+" AND phc.product_id = p.product_id AND phc.boolean_deleted = 0 AND p.boolean_deleted = 0");
    },

    getCategories: function(res, product_id)
    {
        baseModel.get(res, "SELECT c.* FROM Category as c, Product_has_category as phc WHERE phc.product_id = "+baseModel.mysql.escape(product_id)+" AND phc.category_id = c.category_id  AND phc.boolean_deleted = 0 AND c.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Product_has_category SET ?", params);
    },

    update: function(res, params, product_id, category_id)
    {
        baseModel.send(res, "UPDATE Product_has_category SET ? WHERE product_id = "+baseModel.mysql.escape(product_id)+" AND category_id = "+baseModel.mysql.escape(category_id), params);
    },

    destroy: function(res, product_id, category_id)
    {
        baseModel.send(res, "UPDATE Product_has_category SET boolean_deleted = 1 WHERE product_id = "+baseModel.mysql.escape(product_id)+" AND category_id = "+baseModel.mysql.escape(category_id));
    }
};