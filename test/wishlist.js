require('../app_test');

var hippie = require('hippie');

describe('/wishlist', function () {

  it('Get all wishlists that arent hidden', function (done) {
    hippie(app)
      .json()
      .get('/wishlist')
      .expectStatus(200)
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Get all products from an user wishlist', function (done) {
    hippie(app)
      .json()
      .get('/wishlist/products/1')
      .expectStatus(200)
      .expectBody([{
        "user_id": 1,
        "product_id": 2,
        "addition_date": '2017-01-28T23:00:00.000Z',
        "hidden": 0,
        "boolean_deleted": 1,
        "p_name": 'test_product_deleted',
        "p_description": 'This is a test product and it is deleted',
        "p_price": '200',
        "p_brand": 'brand2',
        "p_model": 'model2',
        "p_submodel": 'sub_model2',
        "p_color": 'color2',
        "p_construction_year": 4000,
        "p_image": 'http://i.imgur.com/yneAVIJ.jpg'
      }])
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Get hidden status of a wishlist', function (done) {
    hippie(app)
      .json()
      .get('/wishlist/1')
      .expectStatus(200)
      .expectBody([{
        "hidden": 0
      }])
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('See if a wish exists', function (done) {
    hippie(app)
      .json()
      .get('/wishlist/1/2')
      .expectStatus(200)
      .expectBody([{
        "user_id": 1,
        "product_id": 2,
        "addition_date": '2017-01-28T23:00:00.000Z',
        "hidden": 0,
        "boolean_deleted": 0
      }])
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Create a new wish', function () {
    hippie(app)
      .json()
      .post('/wishlist/create')
      .send(JSON.stringify({ 
        "user_id": 4,
        "product_id": 6,
        "addition_date": '2017-01-28',
        "hidden": 0
      }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Update the wish', function () {
    hippie(app)
      .json()
      .put('/wishlist/4/6')
      .send(JSON.stringify({
        "hidden": 1
      }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
          console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Hide a wishlist', function () {
    hippie(app)
      .json()
      .put('/wishlist/4')
      .expectStatus(200)
      .send(JSON.stringify({ 
        "user_id": 4,
        "hidden": 1
      }))
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Delete a wish', function () {
    hippie(app)
      .json()
      .del('/wishlist/4/9')
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });



  
});