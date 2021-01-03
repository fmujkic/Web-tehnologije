var express = require ('express');
var rasporedController = require('./controlers/rasporedController');
var aktivnostController = require('./controlers/aktivnostController');
var planiranjeNastavnikController = require('./controlers/planiranjeNastavnikConroller');
var podaciStudentController = require('./controlers//podaciStudentController');

var app = express();



//postavljanje template engina
app.set('view engine', 'ejs');

//staticni fileovi
app.use('/assets',express.static('assets'));
//app.use('/views',express.static('views'));
//app.use('/controlers',express.static('controlers'));



//pokretanje kontrolera

rasporedController(app);
aktivnostController(app);
planiranjeNastavnikController(app);
podaciStudentController(app);




//slusanje porta
app.listen(3000);
console.log('Slusanje porta 3000');