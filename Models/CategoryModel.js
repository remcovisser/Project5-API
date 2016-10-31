var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Category WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Category WHERE category_id = "+id+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Category (c_name, c_description, c_slug, parent_c_id) VALUES ('"+params.c_name+"', '"+params.c_description+"', '"+params.c_slug+"', '"+params.parent_c_id+"')");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Category SET c_name='"+params.c_name+"', c_description='"+params.c_description+"', c_slug='"+params.c_slug+"', parent_c_id='"+params.parent_c_id+"' WHERE category_id = " + id);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Category SET boolean_deleted = 1 WHERE category_id = " + id);
    }
};