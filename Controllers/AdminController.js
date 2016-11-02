var adminModel = require(__base + '/Models/AdminModel');

module.exports = {
  registeredUsers: function(req, res, next) {
    var result = adminModel.registeredUsers(res);
    next();
  }
};