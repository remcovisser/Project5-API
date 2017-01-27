var restify = require('restify'),
    fs = require('fs'),
    mysql = require('mysql'),
    jwt = require('jsonwebtoken'),
	nodeCache = require('node-cache'),
	validator = require(__dirname + '//validator.js');

// Set a global variables
global.__base = __dirname + '/';
global.__cache = new nodeCache();
global.__validate = validator;
global.__testing = true;


// Setup the server
var server = restify.createServer();
global.app = server;
server.listen(9000)

// Set the server options
server.use(restify.CORS());
server.use(restify.bodyParser());

// Import controllers
var favouriteController = require('./Controllers/FavouriteController');



// Favourites
server.get('favourites', favouriteController.index);
server.get('favourites/:user_id/products', favouriteController.getProducts);
server.get('favourites/:product_id/users', favouriteController.getUsers);
server.get('favourites/:user_id', favouriteController.show);
server.get('favourites/:user_id/:product_id', favouriteController.showOne);
server.post('favourites/create', favouriteController.store);
server.put('favourites/:user_id/:product_id', favouriteController.update);
server.del('favourites/:user_id/:product_id', favouriteController.destroy);