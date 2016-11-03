var baseModel = require(__base + '/Models/BaseModel');

module.exports = {
    index: function(res)
    {
        baseModel.get(res, "SELECT * from User_has_address WHERE boolean_deleted = 0");
    },

    getUsers: function(res, address_id)
    {
        baseModel.get(res, "SELECT a.* FROM Address as a, User_has_address as phc WHERE phc.address_id = "+baseModel.mysql.escape(address_id)+" AND phc.address_id = a.address_id AND phc.boolean_deleted = 0 AND a.boolean_deleted = 0");
    },

    getAddresses: function(res, user_id)
    {
        baseModel.get(res, "SELECT u.* FROM User as u, User_has_address as phc WHERE phc.user_id = "+baseModel.mysql.escape(user_id)+" AND phc.user_id = u.user_id AND phc.boolean_deleted = 0 AND u.boolean_deleted = 0");
    },

    store: function(res, params)
    {
        baseModel.send(res, "INSERT INTO User_has_address SET ?", params);
    },

    update: function(res, params, user_id, address_id)
    {
        baseModel.send(res, "UPDATE User_has_address SET ? WHERE user_id = "+baseModel.mysql.escape(user_id)+" AND address_id = "+baseModel.mysql.escape(address_id), params);
    },

    destroy: function(res, user_id, address_id)
    {
        baseModel.send(res, "UPDATE User_has_address SET boolean_deleted = 1 WHERE user_id = "+baseModel.mysql.escape(user_id)+" AND address_id = "+baseModel.mysql.escape(address_id));
    }
};