var orderLinesModel = require(__base + '/Models/OrderLinesModel');

module.exports = {
  index: function(req, res, next) {
    orderLinesModel.index(res);
    next();
  },

  show: function(req, res, next) {
    orderLinesModel.show(res, req.params.product_id, req.params.order_id);
    next();
  },

  showAll: function(req, res, next) {
    orderLinesModel.showAll(res, req.params.order_id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body); 
    orderLinesModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    orderLinesModel.update(res, data, req.params.product_id, req.params.order_id);
    next();
  },

  destroy: function(req, res, next) {
    orderLinesModel.destroy(res, req.params.product_id, req.params.order_id);
    next();
  },
};