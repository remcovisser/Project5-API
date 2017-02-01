var restify = require('restify'),
    fs = require('fs'),
    mysql = require('mysql'),
    jwt = require('jsonwebtoken'),
    all_vars = require(__dirname + '//var.js'),
	nodeCache = require('node-cache'),
	validator = require(__dirname + '//validator.js');

// Set a global variables
global.__base = __dirname + '/';
global.__cache = new nodeCache();
global.__validate = validator;
global.__testing = false;

// Set headers to allow XHR requests from a different port
restify.CORS.ALLOW_HEADERS.push('accept');
restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('lang');
restify.CORS.ALLOW_HEADERS.push('origin');
restify.CORS.ALLOW_HEADERS.push('withcredentials');
restify.CORS.ALLOW_HEADERS.push('x-requested-with');
restify.CORS.ALLOW_HEADERS.push('authorization');



// Setup the server
var server = restify.createServer();
server.listen(9000, function() {
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
var orderLinesController = require('./Controllers/OrderLinesController');
var productCategoryController = require('./Controllers/ProductCategoryController');
var streetController = require('./Controllers/StreetController');
var addressController = require('./Controllers/AddressController');
var wishlistController = require('./Controllers/WishlistController');
var adminController = require('./Controllers/AdminController');

// -------------- Routes ---------------
//authentication
server.post('/auth',userController.logintoken);

// Users
server.get('users', userController.index);
server.get('users/:id', userController.show);
server.get('users/:username/find', userController.find);
server.get('users/:username/:password', userController.login);
server.post('users/create', userController.store);
server.put('users/:id', userController.update);
server.del('users/:id', userController.destroy);

// Products
server.get('products', productController.index);
server.get('products/:id', productController.show);
server.post('products/create', productController.store);
server.put('products/:id', productController.update);
server.del('products/:id', productController.destroy);
server.get('products/recommended/:id', productController.recommended);

// Categories
server.get('categories', categoryController.index);
server.get('categories/:id', categoryController.show);
server.post('categories/create', categoryController.store);
server.put('categories/:id', categoryController.update);
server.del('categories/:id', categoryController.destroy);

// Cities
server.get('cities', cityController.index);
server.get('cities/:id', cityController.show);
server.get('cities/exists/:name', cityController.exists);
server.post('cities/create', cityController.store);
server.put('cities/:id', cityController.update);
server.del('cities/:id', cityController.destroy);

// Countries
server.get('countries', countryController.index);
server.get('countries/:id', countryController.show);
server.get('countries/exists/:name', countryController.exists);
server.post('countries/create', countryController.store);
server.put('countries/:id', countryController.update);
server.del('countries/:id', countryController.destroy);


// ProductCategory
server.get('productcategory', productCategoryController.index);
server.get('productcategory/product/:category_id', productCategoryController.getProducts);
server.get('productcategory/category/:product_id', productCategoryController.getCategories);
server.post('productcategory/create', productCategoryController.store);
server.put('productcategory/:product_id/:category_id', productCategoryController.update);
server.del('productcategory/:product_id/:category_id', productCategoryController.destroy);

// Streets
server.get('streets', streetController.index);
server.get('streets/:id', streetController.show);
server.get('streets/exists/:name', streetController.exists);
server.post('streets/create', streetController.store);
server.put('streets/:id', streetController.update);
server.del('streets/:id', streetController.destroy);

// Address
server.get('address', addressController.index);
server.get('address/:id', addressController.show);
server.get('address/exists/:street_id/:city_id/:country_id/:postal_code/:housenumber', addressController.exists);
server.post('address/create', addressController.store);
server.put('address/:user_id/:address_id', addressController.update);
server.del('address/:user_id/:address_id', addressController.destroy);

// Wishlist
server.get('wishlist', wishlistController.index);
server.get('wishlist/users/:product_id', wishlistController.getUsers);
server.get('wishlist/products/:user_id', wishlistController.getProducts);
server.get('wishlist/:user_id', wishlistController.getHidden);
server.get('wishlist/:user_id/:product_id', wishlistController.getWish);
server.post('wishlist/create', wishlistController.store);
server.put('wishlist/:user_id/:product_id', wishlistController.update);
server.put('wishlist/:user_id', wishlistController.hide);
server.del('wishlist/:user_id/:product_id', wishlistController.destroy);

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
server.get('orders/last', orderController.last);
server.get('orders/user/:user_id', orderController.user);
server.get('orders/:id', orderController.show);
server.post('orders/create', orderController.store);
server.put('orders/:id', orderController.update);
server.del('orders/:id', orderController.destroy);

// OrderLines
server.get('orderlines', orderLinesController.index);
server.get('orderlines/info/:order_id', orderLinesController.info);
server.get('orderlines/show-all/:order_id', orderLinesController.showAll);
server.get('orderlines/:product_id/:order_id', orderLinesController.show);
server.post('orderlines/create', orderLinesController.store);
server.put('orderlines/:product_id/:order_id', orderLinesController.update);
server.del('orderlines/:product_id/:order_id', orderLinesController.destroy);

// Admin
server.get('admin/best-selling-products/:amount', adminController.bestSellingProducts);
server.get('admin/sumorders', adminController.sumOrders);
server.get('admin/registered-users', adminController.registeredUsers);

// ----- These calls need to be below the auth check

//jwt config and middleware every routes below is secure with token
server.use(function(req, res, next) {
	// check header or url parameters or post parameters for token
    //var token = req.body.token || req.param('token') || req.headers['x-access-token'];
	var token = req.headers['authorization'];
	// decode token
	if (token) {
		// verifies secret and checks exp 
		jwt.verify(token, all_vars.secret, function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});
	} else {
		// if there is no token return an error
		return res.send({ 
			success: false, 
			message: 'No token provided.'
		});
	}
});


