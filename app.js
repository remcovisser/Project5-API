var restify = require('restify');
var fs = require('fs');
var mysql = require('mysql');

// Set a global variable the root directory
global.__base = __dirname + '/';

// Set headers to allow XHR reqeust from different port
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

// Set server options
server.use(restify.CORS());
server.use(restify.bodyParser());

// Import controllesr
var userController = require('./Controllers/UserController');
var productController = require('./Controllers/productController');


// -------------- Routes ---------------
// Users
server.get('users', userController.index);
server.get('users/:id', userController.show);
server.post('users/create', userController.store);
server.put('users/:id', userController.update);
server.del('users/:id', userController.destroy);

// Products
server.get('products', productController.index);
server.get('products/:id', productController.show);
server.post('products/create', productController.store);
server.put('products/:id', productController.update);
server.del('products/:id', productController.destroy);