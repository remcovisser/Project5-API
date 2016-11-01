var streetModel = require(__base + '/Models/StreetModel');

module.exports = {
  index: function(req, res, next) {
    streetModel.index(res);
    next();
  },

  show: function(req, res, next) {
    streetModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    streetModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    streetModel.update(res, data, req.params.id);
    next();
  },

  destroy: function(req, res, next) {
    streetModel.destroy(res, req.params.id);
    next();
  },
};