var express = require('express');

var zadatak1 = require('./controlers/zadatak1')
var zadatak2 = require('./controlers/zadatak2')
var zadatak4 = require('./controlers/zadatak4')




var app = express();


//postavljanje template engina
app.set('view engine', 'ejs');
//app.use(bodyParser.urlencoded({ extended: false }))



//staticni fileovi
app.use('/assets', express.static('assets'));




//pokretanje kontrolera

zadatak1(app);
zadatak2(app);
zadatak4(app);

//predmetiController(app);
//dodavanjeAktivnostiController(app);
//novi(app);


//slusanje porta
app.listen(3000);
console.log('Slusanje porta 3000');