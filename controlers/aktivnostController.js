const fs = require("fs");

module.exports = function(app){


    app.get('/aktivnost',function(req,res){
        res.render('aktivnost');
    });
    


    
    app.get('/aktivnost.html',function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        fs.createReadStream(process.cwd() + '/views/aktivnost.ejs').pipe(res);
    });
    

    };