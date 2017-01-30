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
          "p_name":"test_product",
          "p_description":"This is a test product",
          "p_price":"100",
          "p_brand":"brand",
          "p_model":"model",
          "p_submodel":"sub_model",
          "p_color":"color",
          "p_construction_year":2000,
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
          "p_name":"Another integration test result",
          "p_description":"Test car description",
          "p_price":"1",
          "p_brand":"Test",
          "p_model":"Car",
          "p_submodel":"AB",
          "p_color":"Black",
          "p_construction_year":2016,
          "p_image":"https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
          "boolean_deleted":0
      }))
      .expectStatus(200)
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });
});