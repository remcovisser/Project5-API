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
      var data = JSON.parse(req.body);
      
    productModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    res.send('post edit product: ' + req);
    next();
  },

  destroy: function(req, res, next) {
    productModel.destroy(res, req.params.id);
    next();
  },

};
