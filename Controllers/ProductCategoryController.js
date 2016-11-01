var productCategoryModel = require(__base + '/Models/ProductCategoryModel');

module.exports = {
  index: function(req, res, next) {
    productCategoryModel.index(res);
    next();
  },

  getProducts: function(req, res, next) {
    productCategoryModel.getProducts(res, req.params.category_id);
    next();
  },

  getCategories: function(req, res, next) {
    productCategoryModel.getCategories(res, req.params.product_id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    productCategoryModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    productCategoryModel.update(res, data, req.params.product_id, req.params.category_id);
    next();
  },

  destroy: function(req, res, next) {
    productCategoryModel.destroy(res, req.params.product_id, req.params.category_id);
    next();
  },
};