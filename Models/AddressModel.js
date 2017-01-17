var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from Address WHERE boolean_deleted = 0");
    },

    show: function(res, id)
    {
        baseModel.get(res, "SELECT * from Address WHERE address_id = "+baseModel.mysql.escape(id)+" AND boolean_deleted = 0");
    },

    exists: function(res, street_id, city_id, country_id, postal_code, housenumber)
    {
        baseModel.get(res, "SELECT * from Address WHERE street_id = "+baseModel.mysql.escape(street_id)+" AND city_id = "+baseModel.mysql.escape(city_id)+" AND country_id = "+baseModel.mysql.escape(country_id)+" AND postal_code = "+baseModel.mysql.escape(postal_code)+" AND housenumber = "+baseModel.mysql.escape(housenumber)+" AND boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO Address SET ?", params);
    },

    update: function(res, params, user_id, address_id)
    {
        baseModel.send(res, "UPDATE Address SET ? WHERE address_id = "+baseModel.mysql.escape(address_id), params);
    },

    destroy: function(res, user_id, address_id)
    {
        baseModel.send(res, "UPDATE Address SET boolean_deleted = 1 WHERE AND address_id = "+baseModel.mysql.escape(address_id));
    }
};