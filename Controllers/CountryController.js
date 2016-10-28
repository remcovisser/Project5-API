var countryModel = require(__base + '/Models/CountryModel');

module.exports = {
  index: function(req, res, next) {
    countryModel.index(res);
    next();
  },

  show: function(req, res, next) {
    countryModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    countryModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    countryModel.update(res, data, req.params.id);
    next();
  },

  destroy: function(req, res, next) {
    countryModel.destroy(res, req.params.id);
    next();
  },
};