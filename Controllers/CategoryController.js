var categoryModel = require(__base + '/Models/CategoryModel');

module.exports = {
  index: function(req, res, next) {
    categoryModel.index(res);
    next();
  },

  show: function(req, res, next) {
    categoryModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    categoryModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    categoryModel.update(res, data, req.params.id);
    next();
  },

  destroy: function(req, res, next) {
    categoryModel.destroy(res, req.params.id);
    next();
  },
};