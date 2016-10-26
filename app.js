var restify = require('restify');
var fs = require('fs');

var mysql      = require('mysql');

global.__base = __dirname + '/';

// Setup server
var server = restify.createServer();
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

var userController = require('./Controllers/UserController');


// Users
server.get('users', userController.index);
server.get('users/:id', userController.show);
server.get('users/create', userController.create);
server.post('users', userController.store);
server.get('users/:id/edit', userController.edit);
server.put('users/:id', userController.update);
server.del('users/:id', userController.destroy);