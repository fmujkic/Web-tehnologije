const fs = require("fs");

module.exports = function(app){


    app.get('/aktivnost.html',function(req,res){
        res.render('aktivnost');
    });
    

    app.get('/planiranjeNastavnik.html',function(req,res){
        res.render('planiranjeNastavnik');
        });
        
       
        app.get('/podaciStudent.html',function(req,res){
            res.render('podaciStudent');
            });
            
            
            
     app.get('/raspored.html',function(req,res){
                res.render('raspored');
                });
                
                
                





    };