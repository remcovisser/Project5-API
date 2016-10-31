// Import UserModdel
var userModel = require(__base + '/Models/UserModel');

module.exports = {

  index: function(req, res, next) {
    userModel.index(res);
    next();
  },

  show: function(req, res, next) {
    userModel.show(res, req.params.id);
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body);
    userModel.store(res, data);
    next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    userModel.update(res, data);
    next();
  },

  destroy: function(req, res, next) {
    userModel.destroy(res, req.params.id);
    next();
  },

  // These only get used for the front-end view
  edit: function(req, res, next) {
    res.send('edit user: ' + req.params.id);
    next();
  },

  create: function(req, res, next) {
    res.send('create user');
    next();
  },
  // These only get used for the front-end view

};
