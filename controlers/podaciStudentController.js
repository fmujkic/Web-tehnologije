var fs = require('fs');
module.exports = function(app){


    app.get('/podaciStudent',function(req,res){
    res.render('podaciStudent');
    });
    
    

    app.get('/podaciStudent.html',function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        fs.createReadStream(process.cwd() + '/views/podaciStudent.ejs').pipe(res);
    });
    
    
    };