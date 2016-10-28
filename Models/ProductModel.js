var baseModel = require(__base + '/Models/BaseModel');

exports.index = function(res)
{
    baseModel.get(res, 'SELECT * from Product');
}

exports.show = function(res, id)
{
    baseModel.get(res, 'SELECT * from Product WHERE product_id = ' + id);
}

exports.store = function(res, params)
{
    baseModel.send(res, "INSERT INTO Product (p_name,p_description,p_price) VALUES ('"+params.p_name+"', '"+params.p_description+"', "+params.p_price+")");
}

exports.destroy = function(res, id)
{
    baseModel.send(res, 'DELETE FROM Product WHERE product_id = ' + id);
}