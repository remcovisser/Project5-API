var test = require('unit.js');

describe('/wishlist', function () {

  it('Verify data for wishlist overview', function () {
      var wishlists = [{ user_id: 1, username: 'user' }];

      test
        .array(wishlists)
            .object(wishlists[0])
                .hasProperty('user_id')
                .hasProperty('username')
        ;
  });

  it('Verify product data from an user wishlist', function() {
      var wishlist = {
        user_id: 1,
        product_id: 4,
        addition_date: '2017-01-29',
        hidden: 0,
        boolean_deleted: 0,
        p_name: 'product',
        p_description: 'product',
        p_price: '100',
        p_brand: 'brand',
        p_model: 'model',
        p_submodel: 'sub_model',
        p_color: 'color',
        p_construction_year: 2000,
        p_image: 'https://openclipart.org/image/2400px/svg_to_png/222252/feels.png'
      };

      test
        .object(wishlist)
            .hasProperty('user_id')
            .hasProperty('product_id')
            .hasProperty('addition_date')
            .hasProperty('hidden')
            .hasProperty('p_name')
            .hasProperty('p_description')
            .hasProperty('p_price')
            .hasProperty('p_brand')
            .hasProperty('p_model')
            .hasProperty('p_submodel')
            .hasProperty('p_color')
            .hasProperty('p_construction_year')
            .hasProperty('p_image')
        ;
  });

  it('Verify hidden status of a wishlist', function() {
      var hidden = [{ hidden: 1 }];
    
      test 
        .array(hidden)
            .object(hidden[0])
                .hasProperty('hidden')
                    .number(hidden[0]['hidden']).is(1)
    ;

  });

  it('Verify data of a wish for post / get', function() {
      var wish = {
        user_id: 1,
        product_id: 2,
        addition_date: '2017-01-28T23:00:00.000Z',
        hidden: 0,
        boolean_deleted: 0
      };

      test
        .object(wish)
            .hasProperty('user_id')
            .hasProperty('product_id')
            .hasProperty('addition_date')
            .hasProperty('hidden')
            .hasProperty('boolean_deleted')
        .number(wish.user_id).is(1)
        .number(wish.product_id).is(2)
        .string(wish.addition_date).is('2017-01-28T23:00:00.000Z')
        .number(wish.hidden).is(0)
        .number(wish.boolean_deleted).is(0)
        ;

  });
  
});