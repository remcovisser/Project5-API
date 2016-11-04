var baseModel = require(__base + '/Models/BaseModel');


exports.index = function(res) {
    baseModel.get(res, "SELECT * from User WHERE boolean_deleted = 0");
}

exports.show = function(res, id)
{
    baseModel.get(res, "SELECT * from User WHERE user_id = " +  baseModel.mysql.escape(id));
}

exports.find = function(res, user)
{
    baseModel.get(res, 'SELECT * FROM User WHERE username = '+ baseModel.mysql.escape(user) +' and boolean_deleted = 0 AND boolean_banned = 0');
}

exports.login = function(res, params)
{
    var params = [params.username, params.password];
    baseModel.get(res, 'SELECT * FROM User WHERE username = ? and password = ? and boolean_deleted = 0 AND boolean_banned = 0', params);
}

exports.store = function(res, params) 
{
    baseModel.send(res, "INSERT INTO User SET ?", params);    
}

exports.update = function(res, params, id) 
{
    baseModel.send(res, "UPDATE User SET ? WHERE user_id = " +  baseModel.mysql.escape(id), params);     
}

exports.destroy = function(res, id) 
{
    baseModel.send(res, "UPDATE User SET boolean_deleted = 1 WHERE user_id = " +  baseModel.mysql.escape(id));     
}