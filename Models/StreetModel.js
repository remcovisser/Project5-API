var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Street WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Street WHERE street_id = "+id+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Street (street, addition) VALUES ('"+params.street+"', '"+params.addition+"')");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Street SET street='"+params.street+"', addition='"+params.addition+"' WHERE street_id = " + id);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Street SET boolean_deleted = 1 WHERE street_id = " + id);
    }
};