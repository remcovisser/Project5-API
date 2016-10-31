var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from City WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from City WHERE city_id = "+id+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO City (city) VALUES ('"+params.city+"')");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE City SET city='"+params.city+"' WHERE city_id = " + id);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, "UPDATE City SET boolean_deleted = 1 WHERE city_id = " + id);
    }
};