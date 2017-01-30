// Import UserModdel
var userModel = require(__base + '/Models/UserModel');
var baseModel = require(__base + '/Models/BaseModel');
var jwt = require('jsonwebtoken');
var all_vars = require(__base + '//var.js');

module.exports = {

  index: function(req, res, next) {
    userModel.index(res);
    next();
  },

  show: function(req, res, next) {
    userModel.show(res, req.params.id);
    next();
  },

  find: function(req, res, next) {
    userModel.find(res, req.params.username);
    next();
  },

  login : function(req, res, next){
    userModel.login(res, req.params);
    next();
  },

 logintoken : function(req, res, next){
    var executingQuery = 'SELECT * FROM User WHERE username = "'+ req.params.username +'"  and password = "'+ req.params.password +'" and boolean_deleted = 0 AND boolean_banned = 0';

    var callback = function(data) {
     if (data.length == 0) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (data.length == 1) {
          // if user is found and password is right
          // create a token
          var token = jwt.sign(data, all_vars.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

          res.json({
            message: 'Enjoy your token!',
            success: 'true',
            "user_id": data[0].user_id,
            "username": data[0].username,
            "email": data[0].email,
            "date": data[0].date_of_birth,
            "admin": data[0].admin,
            token: token
          });
      }
    }
    baseModel.getData(res, executingQuery, callback);
    next();
  },

  store: function(req, res, next) {
      var data = JSON.parse(req.body);
      userModel.store(res, data);
      next();
  },

  update: function(req, res, next) {
    var data = JSON.parse(req.body);
    userModel.update(res, data, data.user_id);
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
