var orderModel = require(__base + '/Models/OrderModel');

module.exports = {
  index: function(req, res, next) {
    orderModel.index(res);
    next();
  },

  show: function(req, res, next) {
    orderModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    orderModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    orderModel.update(res, data, data.order_id);
    next();
  },

  destroy: function(req, res, next) {
    orderModel.destroy(res, req.params.id);
    // TODO Delete orderLines
    next();
  },

  last: function(req, res, next) {
    orderModel.last(res, req.params.id);
    next();
  },

  user: function(req, res, next) {
    orderModel.user(res, req.params.user_id);
    next();
  },

};