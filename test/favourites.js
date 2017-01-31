require('../app_test');

var hippie = require('hippie');


describe('/favourites endpoint', function () {

  it('Get the favourite list of an user', function (done) {
    hippie(app)
      .json()
      .get('/favourites/1')
      .expectStatus(200)
      .expectBody([{
        "product_id":1,
        "p_name":"test_product"
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Get a non existing favourite list', function (done) {
    hippie(app)
      .json()
      .get('/favourites/2')
      .expectStatus(200)
      .expectBody([])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Get the user from a favourite list', function (done) {
    hippie(app)
      .json()
      .get('/favourites/1/users')
      .expectStatus(200)
      .expectBody([{
        "user_id": 1,
        "username": "test_user",
        "password": "123",
        "email": "test@tset.nl",
        "admin": 0,
        "date_of_birth": "2000-10-10T00:00:00.000Z",
        "create_date": "2017-01-27T00:00:00.000Z",
        "boolean_deleted": 0,
        "boolean_banned": 0,
        "token": null
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Get the products from a favourite list', function (done) {
    hippie(app)
      .json()
      .get('/favourites/1/products')
      .expectStatus(200)
      .expectBody([{
        "product_id": 1,
        "p_name": "test_product",
        "p_description": "This is a test product",
        "p_price": "100",
        "p_brand": "brand",
        "p_model": "model",
        "p_submodel": "sub_model",
        "p_color": "color",
        "p_construction_year": 2000,
        "p_image": "https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
        "boolean_deleted": 0
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Add a product to a favourite list', function (done) {
    hippie(app)
      .json()
      .post('/favourites/create')
      .send(JSON.stringify({ product_id: '5', user_id: '5' }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Delete a product from a favourite list', function (done) {
    hippie(app)
      .json()
      .del('/favourites/5/5')
      .expectStatus(200)
      .expectBody('"Affected rows: 2"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Delete a non existing product from a favourite list', function (done) {
    hippie(app)
      .json()
      .del('/favourites/10/10')
      .expectStatus(200)
      .expectBody('"Affected rows: 0"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });
});
