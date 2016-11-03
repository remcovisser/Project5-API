var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Category WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Category WHERE category_id = "+baseModel.mysql.escape(id)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Category SET ?", params);
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Category SET ? WHERE category_id = " + baseModel.mysql.escape(parseInt(id)), params);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Category SET boolean_deleted = 1 WHERE category_id = " + baseModel.mysql.escape(id));
    }
};