require('../app_test');

var hippie = require('hippie');


describe('/admin endpoint', function () {

  it('Get the total registered users per day', function (done) {
    hippie(app)
      .json()
      .get('/admin/registered-users')
      .expectStatus(200)
      .expectBody([{ 
        day: [1, 3, 5 ], 
        users: [27, 29, 30]
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Get the 5 best selling products', function (done) {
    hippie(app)
      .json()
      .get('/admin/best-selling-products/5')
      .expectStatus(200)
      .expectBody([{ 
        productnames: ['test_product_deleted', 'test_product'],
        amount: [2, 1] 
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Get the sum of the orders per week', function (done) {
    hippie(app)
      .json()
      .get('/admin/sumorders')
      .expectStatus(200)
      .expectBody([{ 
        weekNumbers: [4], 
        total: [1000]
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

});