var restify = require('restify');
var fs = require('fs');

var mysql = require('mysql');

global.__base = __dirname + '/';

restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');


// Setup server
var server = restify.createServer();
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

server.use(restify.CORS());
server.use(restify.bodyParser());

var userController = require('./Controllers/UserController');
var productController = require('./Controllers/productController');


// Users
server.get('users', userController.index);
server.get('users/:id', userController.show);
server.get('users/create', userController.create);
server.post('users/create', userController.store);
server.get('users/:id/edit', userController.edit);
server.put('users/:id', userController.update);
server.del('users/:id', userController.destroy);

// Products
server.get('products', productController.index);
server.get('products/:id', productController.show);
server.post('products/create', productController.store);
server.put('products/:id', productController.update);
server.del('products/:id', productController.destroy);