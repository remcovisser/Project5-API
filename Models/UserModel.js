var baseModel = require(__base + '/Models/BaseModel');

exports.index = function(res)
{
    baseModel.selectData(res, 'SELECT * from User');
}

exports.show = function(res, id)
{
    baseModel.selectData(res, 'SELECT * from User WHERE user_id = ' + id);
}