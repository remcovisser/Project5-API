var test = require('unit.js');

describe('/orders UNIT TESTING', function () {

  it('Verify if data exists for order overview', function () {
      var orders = [{ 
        "order_id": 1,
        "user_id": 1,
        "order_date": "2017-01-28T13:24:05.000Z",
        "firstname": "firstname",
        "lastname": "lastname",
        "address_id": 1,
        "phonenumber": "123456",
        "order_status": null,
        "boolean_deleted": 0
      }];

      test
        .array(orders)
            .object(orders[0])
                .hasProperty('order_id')
                .hasProperty('user_id')
                .hasProperty('order_date')
                .hasProperty('firstname')
                .hasProperty('lastname')
                .hasProperty('address_id')
                .hasProperty('phonenumber')
                .hasProperty('order_status')
                .hasProperty('boolean_deleted')
        ;
  });

  it('Verify datatypes before insertion/updating', function() {
      var order = { 
        "order_id": 1,
        "user_id": 1,
        "order_date": "2017-01-28T13:24:05.000Z",
        "firstname": "firstname",
        "lastname": "lastname",
        "address_id": 1,
        "phonenumber": "123456",
        "order_status": 0,
        "boolean_deleted": 0
      };

      test
        .object(order)
          .hasProperty('order_id')
          .hasProperty('user_id')
          .hasProperty('order_date')
          .hasProperty('firstname')
          .hasProperty('lastname')
          .hasProperty('address_id')
          .hasProperty('phonenumber')
          .hasProperty('order_status')
          .hasProperty('boolean_deleted')
        .number(order.order_id)
        .number(order.user_id)
        .string(order.order_date)
        .string(order.firstname)
        .string(order.lastname)
        .number(order.address_id)
        .string(order.phonenumber)
        .number(order.order_status)
        .number(order.boolean_deleted)
        ;

  });

  it('Verify data after getting a specific order', function() {
      var order = { 
        "order_id": 1,
        "user_id": 1,
        "order_date": "2017-01-28T13:24:05.000Z",
        "firstname": "pet",
        "lastname": "vis",
        "address_id": 1,
        "phonenumber": "123123",
        "order_status": 0,
        "boolean_deleted": 1
      };
      
      test
        .object(order)
          .hasProperty('order_id')
          .hasProperty('user_id')
          .hasProperty('order_date')
          .hasProperty('firstname')
          .hasProperty('lastname')
          .hasProperty('address_id')
          .hasProperty('phonenumber')
          .hasProperty('order_status')
          .hasProperty('boolean_deleted')
        .number(order.order_id)
        .number(order.user_id)
        .string(order.order_date)
        .string(order.firstname)
        .string(order.lastname)
        .number(order.address_id)
        .string(order.phonenumber)
        .number(order.order_status)
        .number(order.boolean_deleted)
        ;

  });


});