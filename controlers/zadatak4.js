var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app) {


    app.get("/unosRasporeda.html", function(req, res) {
        res.sendFile(__dirname + "/unosRasporeda.html");
    });





}