var baseModel = require(__base + '/Models/BaseModel');


exports.index = function(res) {
    baseModel.get(res, 'SELECT * from User');
}

exports.show = function(res, id)
{
    baseModel.get(res, 'SELECT * from User WHERE user_id = ' + id);
}

exports.store = function(res, params) 
{
    baseModel.send(res, 'INSERT INTO User(`username`, `password`, `email`, `date_of_birth`, `admin`) VALUES ("'+params.username+'", "'+params.password+'", "'+params.email+'", "'+params.date+'", 0)');     
}

exports.update = function(res, params) 
{
    baseModel.send(res, 'UPDATE User SET `username` = "'+params.username+'", `password` = "'+params.password+'", `email` = "'+params.email+'")');     
}

exports.destroy = function(res, id) 
{
    baseModel.send(res, 'DELETE FROM User WHERE user_id = ' + id);     
}


