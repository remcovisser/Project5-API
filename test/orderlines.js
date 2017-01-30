require('../app_test');

var hippie = require('hippie');


describe('/orderlines endpoint', function () {

  it('Get a orderline info by id', function (done) {
    hippie(app)
      .json()
      .get('/orderlines/info/1')
      .expectStatus(200)
      .expectBody([{ 
        product_id: 1,
        p_name: 'test_product',
        quantity: 10,
        product_price: '100',
        order_id: 1,
        favourited: 1
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Show all orderlines by id', function (done) {
    hippie(app)
      .json()
      .get('/orderlines/show-all/1')
      .expectStatus(200)
      .expectBody([{ 
        product_id: 1,
        order_id: 1,
        quantity: 10,
        product_price: '100',
        boolean_deleted: 0 
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Show product', function (done) {
    hippie(app)
      .json()
      .get('/orderlines/1/1')
      .expectStatus(200)
      .expectBody([{ 
        product_id: 1,
        order_id: 1,
        quantity: 10,
        product_price: '100',
        boolean_deleted: 0 
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

   it('Create an orderline', function (done) {
    hippie(app)
      .json()
      .post('/orderlines/create')
      .send(JSON.stringify({ 
        product_id: "2",
        order_id: "2",
        quantity: "100",
        product_price: "500",
        boolean_deleted: "1"
      }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

});