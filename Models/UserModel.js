var baseModel = require(__base + '/Models/BaseModel');


exports.index = function(res) {
    baseModel.get(res, 'SELECT * from User');
}

exports.store = function(res, params) 
{
    baseModel.send(res, 'INSERT INTO User(`username`, `password`, `email`, `date_of_birth`, `admin`) VALUES ("'+params.username+'", "'+params.password+'", "'+params.email+'", "'+params.date+'", 0)');     
}
