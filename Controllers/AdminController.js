var adminModel = require(__base + '/Models/AdminModel');

module.exports = {
  registeredUsers: function(req, res, next) {
    var result = adminModel.registeredUsers(res);
    next();
  },

  bestSellingProducts: function(req, res, next) {
    var result = adminModel.bestSellingProducts(res, req.params.amount);
    next();
  },

  sumOrders: function(req, res, next) {
    var result = adminModel.sumOrders(res);
    next();
  }
};