// Import UserModdel
var userModel = require(__base + '/Models/UserModel');

module.exports = {

  index: function(req, res, next) {
    userModel.index(res);
    //next();
  },

  show: function(req, res, next) {
    userModel.show(res, req.params.id);
    //next();
  },

  create: function(req, res, next) {
    res.send('create user');
    next();
  },

  store: function(req, res, next) {
    res.send('store user');
    next();
  },

  edit: function(req, res, next) {
    res.send('edit user: ' + req.params.id);
    next();
  },

  update: function(req, res, next) {
    res.send('post edit user: ' + req.params);
    next();
  },

  destroy: function(req, res, next) {
    res.send('destroy user: ' + req.params.id);
    next();
  },

};
