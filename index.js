var express = require('express');
var app = express();
const db = require('./models');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());




const ruteStare = require('./routes/stareRute');
app.use("/v1", ruteStare);

const rute = require('./routes/sveRute');
app.use("/v2", rute);




app.get("/studenti.html", (req, res) => {

    res.sendFile('studenti.html', { root: __dirname })


});





db.sequelize.sync().then((req) => {
    app.listen(3011, () => {
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