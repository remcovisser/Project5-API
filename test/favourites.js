var hippie = require('hippie');
require('../app');

describe('Server', function () {
  describe('/favourites endpoint', function () {
    it('returns a favourite list based on the id', function (done) {
      hippie(app)
        .json()
        .get('/favourites/1')
        .expectStatus(200)
        .end(function(err, res, body) {
            console.log(res.body);
          if (err) throw err;
          done();
        });
    });
  });
});