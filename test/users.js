require('../app_test');

var hippie = require('hippie');

describe('/users', function () {

  it('Get all users', function (done) {
    hippie(app)
      .json()
      .get('/users')
      .expectStatus(200)
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Get an user by id', function (done) {
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
        "date_of_birth": "2000-10-09T22:00:00.000Z",
        "create_date": "2017-01-26T23:00:00.000Z",
        "boolean_deleted": 0,
        "boolean_banned" : 0,
        "token": null
      }])
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Look for an username', function (done) {
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
        "date_of_birth": "2000-10-09T22:00:00.000Z",
        "create_date": "2017-01-26T23:00:00.000Z",
        "boolean_deleted": 0,
        "boolean_banned" : 0,
        "token": null
      }])
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Look for an user with specific username/password', function (done) {
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
        "date_of_birth": "2000-10-09T22:00:00.000Z",
        "create_date": "2017-01-26T23:00:00.000Z",
        "boolean_deleted": 0,
        "boolean_banned" : 0,
        "token": null
      }])
      .end(function(err, res, body) {
        //console.log(body);
        if (err) throw err;
        done();
      });
  });

  it('Create a new user (not-admin)', function () {
    hippie(app)
      .json()
      .post('/users/create')
      .send(JSON.stringify({ 
        "user_id": 20,
        "username": "newuser",
        "password": "321",
        "email": "new@sonew.nl",
        "admin": 0,
        "date_of_birth": "1999-10-10",
        "create_date": "2017-01-29"
      }))
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Update an user', function () {
    hippie(app)
      .json()
      .put('/users/2')
      .expectStatus(200)
      .send(JSON.stringify({ 
        "user_id": 2,
        "username": "meme",
        "password": "321",
        "email": "new@updated.nl"
      }))
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });

  it('Delete an user', function () {
    hippie(app)
      .json()
      .del('/users/2')
      .expectStatus(200)
      .expectBody('"Affected rows: 1"')
      .end(function(err, res, body) {
        if (err) throw err;
        done();
      });
  });


});