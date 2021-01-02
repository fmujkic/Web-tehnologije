var express = require ('express');
var rasporedController = require('./controlers/rasporedController')

var app = express();






//postavljanje template engina
app.set('view engine', 'ejs');

//staticni fileovi
app.use(express.static('./public'))



//pokretanje kontrolera

rasporedController(app);





//slusanje porta
app.listen(3000);
console.log('Slusanje porta 3000');