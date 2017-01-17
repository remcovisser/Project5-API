var addressModel = require(__base + '/Models/AddressModel');

module.exports = {
  index: function(req, res, next) {
    addressModel.index(res);
    next();
  },
  
  show: function(req, res, next) {
    addressModel.show(res, req.params.id);
    next();
  },
  
  exists: function(req, res, next) {
    addressModel.exists(res, req.params.street_id, req.params.city_id, req.params.country_id, req.params.postal_code, req.params.housenumber);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    addressModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    addressModel.update(res, data, req.params.user_id, req.params.address_id);
    next();
  },

  destroy: function(req, res, next) {
    addressModel.destroy(res, req.params.user_id, req.params.address_id);
    next();
  },
};