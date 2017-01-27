require('../app_test');
console.log('favourite');

var hippie = require('hippie');

describe('Server', function () {
  describe('/favourites endpoint', function () {
    it('returns a favourite list of an user based on the id', function (done) {
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
  });
});