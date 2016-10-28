// Import UserModdel
var userModel = require(__base + '/Models/UserModel');


module.exports = {

  index: function(req, res, next) {
    var data = userModel.index();
    res.send(data);
  },

  show: function(req, res, next) {
    res.send('show user: ' + req.params.id);
    next();
  },

  create: function(req, res, next) {
    res.send('create user');
    next();
  },

  store: function(req, res, next) {
    var data = JSON.parse(req.body);
    userModel.store(res, data);
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
