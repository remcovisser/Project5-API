var wishlistModel = require(__base + '/Models/WishlistModel');

module.exports = {
  index: function(req, res, next) {
    wishlistModel.index(res);
    next();
  },

  getUsers: function(req, res, next) {
    wishlistModel.getUsers(res, req.params.product_id);
    next();
  },

  getProducts: function(req, res, next) {
    wishlistModel.getProducts(res, req.params.user_id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    wishlistModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    wishlistModel.update(res, data, req.params.user_id, req.params.product_id);
    next();
  },

  destroy: function(req, res, next) {
    wishlistModel.destroy(res, req.params.user_id, req.params.product_id);
    next();
  },
};