var baseModel = require(__base + '/Models/BaseModel');


exports.index = function(res) {
    baseModel.get(res, "SELECT * from User");
}

exports.show = function(res, id)
{
    baseModel.get(res, "SELECT * from User WHERE user_id = " + id);
}

exports.find = function(res, user)
{
    baseModel.get(res, 'SELECT * FROM User WHERE username = "'+ user +'" and boolean_deleted = 0');
}

exports.login = function(res, params)
{
    baseModel.get(res, 'SELECT * FROM User WHERE username = "'+ params.username +'" and password = "'+ params.password +'" and boolean_deleted = 0');
}

exports.store = function(res, params) 
{
    baseModel.send(res, "INSERT INTO User(username, password, email, date_of_birth, create_date) VALUES ('"+params.username+"', '"+params.password+"', '"+params.email+"', '"+params.date+"', '"+params.create_date+"')");    
}

exports.update = function(res, params) 
{
    baseModel.send(res, "UPDATE User SET username = '"+params.username+"', password = '"+params.password+"', email = '"+params.email+"', date_of_birth = '"+params.date_of_birth+"', admin =  "+params.admin+" WHERE user_id = '+params.user_id+'");     
}

exports.destroy = function(res, id) 
{
    baseModel.send(res, "UPDATE User SET boolean_deleted = 1 WHERE user_id = " + id);     
}