var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        __cache.get( "products", function( err, value ){
            if(!err && value == undefined){
                var callback = function(data) {
                    __cache.set("products", data, 3600);
                    res.send(data);
                }
                baseModel.getData(res, "SELECT * from Product WHERE boolean_deleted = 0", callback);
            } else {
                return res.send(value); 
            }  
        });
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Product WHERE product_id = "+baseModel.mysql.escape(id)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Product SET ?", params);
        __cache.del("products");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Product SET ? WHERE product_id = " + baseModel.mysql.escape(id), params);
        __cache.del("products");
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Product SET boolean_deleted = 1 WHERE product_id = " + baseModel.mysql.escape(id));
        __cache.del("products");
    },

    recommended: function(res, id)
    {
        baseModel.get(res, "SELECT p.* FROM Product as p WHERE p.boolean_deleted = 0 AND p.product_id != "+baseModel.mysql.escape(id)+" AND p.product_id IN (SELECT ol.product_id FROM Order_lines as ol WHERE ol.order_id IN (SELECT order_id FROM Order_lines WHERE product_id = "+baseModel.mysql.escape(id)+") ) LIMIT 4");
    }
};