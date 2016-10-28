var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, 'SELECT * from City');
    },

    show: function(res, id)
    {
        baseModel.get(res, 'SELECT * from City WHERE city_id = ' + id);
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
        baseModel.send(res, 'DELETE FROM City WHERE city_id = ' + id);
    }
};