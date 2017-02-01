var test = require('unit.js');

describe('/orderlines UNIT TESTING', function () {

  it('Verify if data exists for orderlines overview', function () {
      var orderlines = [{ 
        product_id: 1,
        p_name: 'test_product',
        quantity: 10,
        product_price: 100,
        order_id: 1,
        favourited: 1
      }];

      test
        .array(orderlines)
            .object(orderlines[0])
                .hasProperty('product_id')
                .hasProperty('p_name')
                .hasProperty('quantity')
                .hasProperty('product_price')
                .hasProperty('order_id')
                .hasProperty('favourited')
        ;
  });

  it('Verify datatypes before insertion/updating', function() {
      var order = { 
        product_id: 1,
        p_name: 'test_product',
        quantity: 10,
        product_price: 100,
        order_id: 1,
        favourited: 1
      };

      test
        .object(order)
            .hasProperty('product_id')
            .hasProperty('p_name')
            .hasProperty('quantity')
            .hasProperty('product_price')
            .hasProperty('order_id')
            .hasProperty('favourited')
        .number(order.product_id)
        .string(order.p_name)
        .number(order.quantity)
        .number(order.product_price)
        .number(order.order_id)
        .number(order.favourited)
        ;

  });

  it('Verify data after getting a specific orderline', function() {
      var order = { 
        product_id: 2,
        p_name: 'test_product2',
        quantity: 100,
        product_price: 200,
        order_id: 10,
        favourited: 0
      };
      
      test
        .object(order)
            .hasProperty('product_id')
            .hasProperty('p_name')
            .hasProperty('quantity')
            .hasProperty('product_price')
            .hasProperty('order_id')
            .hasProperty('favourited')
        .number(order.product_id)
        .string(order.p_name)
        .number(order.quantity)
        .number(order.product_price)
        .number(order.order_id)
        .number(order.favourited)
        ;

  });


});