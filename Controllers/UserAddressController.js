var userAddressModel = require(__base + '/Models/UserAddressModel');

module.exports = {
  index: function(req, res, next) {
    userAddressModel.index(res);
    next();
  },

  getUsers: function(req, res, next) {
    userAddressModel.getUsers(res, req.params.address_id);
    next();
  },

  getAddresses: function(req, res, next) {
    userAddressModel.getAddresses(res, req.params.user_id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    userAddressModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    userAddressModel.update(res, data, req.params.user_id, req.params.address_id);
    next();
  },

  destroy: function(req, res, next) {
    userAddressModel.destroy(res, req.params.user_id, req.params.address_id);
    next();
  },
};