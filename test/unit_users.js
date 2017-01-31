var test = require('unit.js');

describe('/wishlist', function () {

  it('Verify data for users overview', function () {
      var users = [
          { user_id: 1, username: 'user', password: '06dasdak', email: 'email@email.nl', date_of_birth: '1994-12-07', boolean_banned: 0 }
      ];

      test
        .array(users)
            .object(users[0])
                .hasProperty('user_id')
                .hasProperty('username')
                .hasProperty('password')
                .hasProperty('email')
                .hasProperty('date_of_birth')
                .hasProperty('boolean_banned')
        ;
  });

  it('Verify data from a specific user', function() {
      var user = { user_id: 1, username: 'user', password: '06dasdak', email: 'email@email.nl', date_of_birth: '1994-12-07', boolean_banned: 0 }

      test
        .object(user)
            .hasProperty('user_id')
            .hasProperty('username')
            .hasProperty('password')
            .hasProperty('email')
            .hasProperty('date_of_birth')
            .hasProperty('boolean_banned')
        .number(user.user_id).is(1)
        .string(user.username).is('user')
        .string(user.password).is('06dasdak')
        .string(user.email).is('email@email.nl')
        .string(user.date_of_birth).is('1994-12-07')
        .number(user.boolean_banned).is(0)    
        ;
  });

  it('Verify data type for updating', function() {
      var user = { user_id: 1, username: 'user', password: '06dasdak', email: 'email@email.nl', boolean_banned: 1}

      test
        .object(user)
            .hasProperty('user_id')
            .hasProperty('username')
            .hasProperty('password')
            .hasProperty('email')
            .hasProperty('boolean_banned')
        .number(user.user_id)
        .string(user.username)
        .string(user.password)
        .string(user.email)
        .number(user.boolean_banned)   
    ;

  });

  it('Verify data type & value for deletion', function() {
      var user_id = 1;

      test
        .number(user_id).is(1)
    ;
  });

});