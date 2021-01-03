var fs = require('fs');
module.exports = function(app){


    app.get('/planiranjeNastavnik',function(req,res){
    res.render('planiranjeNastavnik');
    });
    
    app.get('/planiranjeNastavnik.html',function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        fs.createReadStream(process.cwd() + '/views/planiranjeNastavnik.ejs').pipe(res);
    });

    


    };