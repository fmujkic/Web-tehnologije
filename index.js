var express = require('express');
var app = express();



const db = require('./models');



db.sequelize.sync().then((req) => {
    app.listen(3002, () => {
        console.log('Server pokrenut');
    });
});





//var connection = require("./src/database/connection");


/*mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mojabazaDB'
});

connection.connect(function() {
    if (error) {
        console.log('Greska')
    } else {
        console.log('Povezano');
    }
});

app.get('/', function(req, res) {

    connection.query("SELECT * FROM mojaTabela", function(error, rows, fields) {
        if (error()) {
            console.log('Greska u queriju');


        }
    })
})

*/