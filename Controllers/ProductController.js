// Import UserModdel
var productModel = require(__base + '/Models/ProductModel');

module.exports = {

  index: function(req, res, next) {
    productModel.index(res);
    next();
  },

  show: function(req, res, next) {
    productModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
      var test = req.params;
    productModel.store(res, req.params);
    next();
  },

  update: function(req, res, next) {
    res.send('post edit product: ' + req.params);
    next();
  },

  destroy: function(req, res, next) {
    productModel.destroy(res, req.params.id);
    next();
  },

};
