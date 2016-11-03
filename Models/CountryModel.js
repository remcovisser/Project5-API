var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Country WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Country WHERE country_id = "+baseModel.mysql.escape(id)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Country SET ?", params);
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Country SET ? WHERE country_id = " + baseModel.mysql.escape(id), params);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE Country SET boolean_deleted = 1 WHERE country_id = " + baseModel.mysql.escape(id));
    }
};