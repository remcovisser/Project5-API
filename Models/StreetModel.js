var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Street WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Street WHERE street_id = "+baseModel.mysql.escape(id)+" AND boolean_deleted = 0");
    },

    exists: function(res, name)
    {
        baseModel.get(res, "SELECT * from Street WHERE street = "+baseModel.mysql.escape(name)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Street SET ?", params);
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Street SET ? WHERE street_id = " + baseModel.mysql.escape(id), params);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Street SET boolean_deleted = 1 WHERE street_id = " + baseModel.mysql.escape(id));
    }
};