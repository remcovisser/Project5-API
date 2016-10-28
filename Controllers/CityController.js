var cityModel = require(__base + '/Models/CityModel');

module.exports = {
  index: function(req, res, next) {
    cityModel.index(res);
    next();
  },

  show: function(req, res, next) {
    cityModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    cityModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    cityModel.update(res, data, req.params.id);
    next();
  },

  destroy: function(req, res, next) {
    cityModel.destroy(res, req.params.id);
    next();
  },
};