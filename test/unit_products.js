var test = require('unit.js');

describe('/products UNIT TESTING', function () {

  it('Verify if data exists for product overview', function () {
      var products = [{ 
          product_id: 1,
          p_name: "test_product",
          p_description: "This is a test product",
          p_price: 100,
          p_brand: "brand",
          p_model: "model",
          p_submodel: "sub_model",
          p_color: "color",
          p_construction_year: 2000,
          p_image: "https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
        }];

      test
        .array(products)
            .object(products[0])
                .hasProperty('product_id')
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

  it('Verify datatypes before insertion/updating', function() {
      var product = { 
          product_id: 1,
          p_name: "test_product",
          p_description: "This is a test product",
          p_price: 100,
          p_brand: "brand",
          p_model: "model",
          p_submodel: "sub_model",
          p_color: "color",
          p_construction_year: 2000,
          p_image: "https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
        };

      test
        .object(product)
            .hasProperty('product_id')
            .hasProperty('p_name')
            .hasProperty('p_description')
            .hasProperty('p_price')
            .hasProperty('p_brand')
            .hasProperty('p_model')
            .hasProperty('p_submodel')
            .hasProperty('p_color')
            .hasProperty('p_construction_year')
            .hasProperty('p_image')
        .number(product.product_id)
        .string(product.p_name)
        .string(product.p_description)
        .number(product.p_price)
        .string(product.p_brand)
        .string(product.p_model)
        .string(product.p_submodel)
        .string(product.p_color)
        .number(product.p_construction_year)
        .string(product.p_image)
        ;

  });

  it('Verify data after getting a specific product', function() {
      var product = { 
          product_id: 1,
          p_name: "test_product",
          p_description: "This is a test product",
          p_price: 100,
          p_brand: "brand",
          p_model: "model",
          p_submodel: "sub_model",
          p_color: "color",
          p_construction_year: 2000,
          p_image: "https://openclipart.org/image/2400px/svg_to_png/222252/feels.png",
        };

      test
        .object(product)
            .hasProperty('product_id')
            .hasProperty('p_name')
            .hasProperty('p_description')
            .hasProperty('p_price')
            .hasProperty('p_brand')
            .hasProperty('p_model')
            .hasProperty('p_submodel')
            .hasProperty('p_color')
            .hasProperty('p_construction_year')
            .hasProperty('p_image')
        .number(product.product_id).is(1)
        .string(product.p_name).is('test_product')
        .string(product.p_description).is('This is a test product')
        .number(product.p_price).is(100)
        .string(product.p_brand).is('brand')
        .string(product.p_model).is('model')
        .string(product.p_submodel).is('sub_model')
        .string(product.p_color).is('color')
        .number(product.p_construction_year).is(2000)
        .string(product.p_image).is('https://openclipart.org/image/2400px/svg_to_png/222252/feels.png')
        ;

  });


});