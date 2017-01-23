var requestify = require('requestify'); 
var local = "http://localhost:8080/";

module.exports = {
    uniqueUsername: function(username, callback) {
        requestify.get( local + 'users/' + username + '/find').then(function(response) {
            if(response.getBody().length == 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    }
}