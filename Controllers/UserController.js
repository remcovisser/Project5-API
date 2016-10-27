// Import UserModdel
var userModel = require(__base + '/Models/UserModel');


module.exports = {

  index: function(req, res, next) {
    var data = userModel.index();
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
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
