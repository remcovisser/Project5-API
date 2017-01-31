require('../app_test');

var hippie = require('hippie');

describe('/users', function () {


  it('Get all users', function () {
    hippie(app)
      .json()
      .get('/users')
      .expectStatus(200)
  });

  it('Get an user by id', function () {
    hippie(app)
      .json()
      .get('/users/1')
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
        "boolean_banned" : 0,
        "token": null
      }])
  });

  it('Look for an username', function () {
    hippie(app)
      .json()
      .get('/users/test_user/find')
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
        "boolean_banned" : 0,
        "token": null
      }]);
  });

  it('Look for an user with specific username/password', function () {
    hippie(app)
      .json()
      .get('/users/test_user/123')
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
        "boolean_banned" : 0,
        "token": null
      }]);
  });


  it('Update an user', function () {
    hippie(app)
      .json()
      .put('/users/6')
      .send(JSON.stringify({
        user_id: "6",
        username: "hi_i_got_updated",
        password: "321",
        email: "new@updated.nl"
      }))
      .expectStatus(200)
  });

  it('Delete an user', function (done) {
    hippie(app)
      .json()
      .del('/users/2')
      .expectStatus(200)
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });


});