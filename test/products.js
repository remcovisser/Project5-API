require('../app_test');

var hippie = require('hippie');


describe('Product backend is properly functioning', function () {

  it('Get a product by id', function (done) {
    hippie(app)
      .json()
      .get('/products/1')
      .expectStatus(200)
      .expectBody([{
          "product_id":1,
          "p_name":"Test car",
          "p_description":"Test car description",
          "p_price":"1",
          "p_brand":"Test",
          "p_model":"Car",
          "p_submodel":"AB",
          "p_color":"Black",
          "p_construction_year":2016,
          "p_image":"https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
          "boolean_deleted":0}
          ])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Create a new product', function () {
    hippie(app)
      .json()
      .post('/products/create')
      .send(JSON.stringify({ 
         "product_id":2,
          "p_name":"Test car 2",
          "p_description":"Test car description 2",
          "p_price":"11",
          "p_brand":"Test",
          "p_model":"Car 2",
          "p_submodel":"AB",
          "p_color":"Black",
          "p_construction_year":2012,
          "p_image":"https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
          "boolean_deleted":0
      }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('List all products', function (done) {
    hippie(app)
      .json()
      .get('/products')
      .expectStatus(200)
      .expect(function(res, body, next) {
          var array = JSON.parse(body);
          var err = array.count > 1;
          next(err);
      })
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

    it('Update a product', function () {
    hippie(app)
      .json()
      .put('/products/2')
      .expectStatus(200)
      .send(JSON.stringify({ 
        "product_id": 2,
        "p_name": "TestCarMeme",
        "p_price": "43433",
        "p_color": "Blue"
      }))
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });


  it('Delete a product', function (done) {
    hippie(app)
      .json()
      .del('/products/2')
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

});