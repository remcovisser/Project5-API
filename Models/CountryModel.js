var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, 'SELECT * from Country');
    },

    show: function(res, id)
    {
        baseModel.get(res, 'SELECT * from Country WHERE country_id = ' + id);
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Country (country) VALUES ('"+params.country+"')");
    },

    update: function(res, params, id)
    {
        baseModel.send(res, "UPDATE Country SET country='"+params.country+"' WHERE country_id = " + id);
    },

    destroy: function(res, id)
    {
        baseModel.send(res, 'DELETE FROM Country WHERE country_id = ' + id);
    }
};