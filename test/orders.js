require('../app_test');

var hippie = require('hippie');


describe('/orders endpoint', function () {

  it('Get a order by id', function (done) {
    hippie(app)
      .json()
      .get('/orders/1')
      .expectStatus(200)
      .expectBody([{
        "order_id": 1,
        "user_id": 1,
        "order_date": "2017-01-28T12:24:05.000Z",
        "firstname": "firstname",
        "lastname": "lastname",
        "address_id": 1,
        "phonenumber": "123456",
        "order_status": null,
        "boolean_deleted": 0
      }])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Get the last order_id', function (done) {
    hippie(app)
      .json()
      .get('/orders/last')
      .expectStatus(200)
      .expectBody([{order_id: 1}])
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Add a product to a favourite list', function (done) {
    hippie(app)
      .json()
      .post('/orders/create')
      .send(JSON.stringify({ 
        user_id: "2",
        firstname: "firstname",
        lastname: "lastname",
        phonenumber: "1234567",
        address_id: "2"
      }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Delete an order', function (done) {
    hippie(app)
      .json()
      .del('/orders/2')
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

});