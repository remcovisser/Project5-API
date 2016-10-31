var favouriteModel = require(__base + '/Models/FavouriteModel');

module.exports = {
  index: function(req, res, next) {
    favouriteModel.index(res);
    next();
  },

  show: function(req, res, next) {
    favouriteModel.show(res, req.params.user_id);
    next();
  },

  showOne: function(req, res, next) {
    favouriteModel.showOne(res, req.params.user_id, req.params.product_id);
    next();
  },

  getProducts: function(req, res, next) {
    favouriteModel.getProducts(res, req.params.user_id);
    next();
  },

  getUsers: function(req, res, next) {
    favouriteModel.getUsers(res, req.params.product_id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    favouriteModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    favouriteModel.update(res, data, req.params.user_id, req.params.product_id);
    next();
  },

  destroy: function(req, res, next) {
    favouriteModel.destroy(res, req.params.user_id, req.params.product_id);
    next();
  },
};