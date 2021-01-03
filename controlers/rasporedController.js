var fs = require('fs');
module.exports = function(app){


app.get('/raspored',function(req,res){
res.render('raspored');
});


app.get('/raspored.html',function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.createReadStream(process.cwd() + '/views/raspored.ejs').pipe(res);
});




};