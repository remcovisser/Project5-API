var restify = require('restify');
var fs = require('fs');
var mysql = require('mysql');

// Set a global variable for the root directory
global.__base = __dirname + '/';

// Set headers to allow XHR requests from a different port
restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');

// Setup the server
var server = restify.createServer();
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// Set the server options
server.use(restify.CORS());
server.use(restify.bodyParser());

// Import controllers
var userController = require('./Controllers/UserController');
var productController = require('./Controllers/ProductController');
var categoryController = require('./Controllers/CategoryController');
var cityController = require('./Controllers/CityController');
var countryController = require('./Controllers/CountryController');
var favouriteController = require('./Controllers/FavouriteController');
var orderController = require('./Controllers/OrderController');

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

// Categories
server.get('categories', categoryController.index);
server.get('categories/:id', categoryController.show);
server.post('categories/create', categoryController.store);
server.put('categories/:id', categoryController.update);
server.del('categories/:id', categoryController.destroy);

// Cities
server.get('cities', cityController.index);
server.get('cities/:id', cityController.show);
server.post('cities/create', cityController.store);
server.put('cities/:id', cityController.update);
server.del('cities/:id', cityController.destroy);

// Countries
server.get('countries', countryController.index);
server.get('countries/:id', countryController.show);
server.post('countries/create', countryController.store);
server.put('countries/:id', countryController.update);
server.del('countries/:id', countryController.destroy);

// Favourites
server.get('favourites', favouriteController.index);
server.get('favourites/:user_id/products', favouriteController.getProducts);
server.get('favourites/:product_id/users', favouriteController.getUsers);
server.get('favourites/:user_id', favouriteController.show);
server.get('favourites/:user_id/:product_id', favouriteController.showOne);
server.post('favourites/create', favouriteController.store);
server.put('favourites/:user_id/:product_id', favouriteController.update);
server.del('favourites/:user_id/:product_id', favouriteController.destroy);

// Orders
server.get('orders', orderController.index);
server.get('orders/:id', orderController.show);
server.post('orders/create', orderController.store);
server.put('orders/:id', orderController.update);
server.del('orders/:id', orderController.destroy);