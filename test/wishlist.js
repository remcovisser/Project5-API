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
      .get('/wishlist/products/26')
      .expectStatus(200)
      .expectBody([{
        user_id: 26,
        product_id: 1,
        addition_date: '2017-01-30T00:00:00.000Z',
        hidden: 0,
        boolean_deleted: 0,
        p_name: 'test_product',
        p_description: 'This is a test product',
        p_price: '100',
        p_brand: 'brand',
        p_model: 'model',
        p_submodel: 'sub_model',
        p_color: 'color',
        p_construction_year: 2000,
        p_image: 'https://openclipart.org/image/2400px/svg_to_png/222252/feels.png'
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
      .expectBody([{"hidden": 0}, {"hidden": 0}])
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
        "addition_date": '2017-01-29T00:00:00.000Z',
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
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });
  
});