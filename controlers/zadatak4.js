var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app) {


    app.get("/unosRasporeda.html", function(req, res) {
        res.sendFile(__dirname + "/unosRasporeda.html");
    });



    /*

        app.get('/unosRasporeda.html', function(req, res) {


            fs.readFile(process.cwd() + '/assets/aktivnosti.txt', 'utf8', function(err, data) {
                if (err) {
                    return console.log(err);
                }
                const ispis = data.toString();
                let pom = data.toString('utf-8').split("\n");



                fs.readFile(process.cwd() + '/assets/predmeti.txt', 'utf8', function(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    const ispis = data.toString();
                    let pom1 = data.toString('utf-8').split("\n");




                    res.render('unosRasporeda', { podaci: pom, podaci1: pom1 });
                });
            });


        });



        app.post('/unosRasporeda.html', urlencodedParser, function(req, res) {

            let postoji = 0;


            fs.readFile(process.cwd() + '/assets/predmeti.txt', 'utf8', function(err, data) {
                if (err) {
                    return console.log(err);
                }
                const ispis = data.toString();

                let pom = data.toString('utf-8').split("\n");
                let imenik = [];

                for (let i = 0; i < pom.length; i++) {
                    let neko = { naziv: pom[i] };
                    imenik.push(neko);

                    if (pom[i] == req.body['nazivPredmeta']) {
                        console.log("Naziv predmeta postoji!");
                        postoji = 1;
                    }
                }


                if (postoji == 0) {
                    imenik.push(req.body);

                    fs.writeFile(process.cwd() + '/assets/predmeti.txt', data + '\n' + req.body['nazivPredmeta'], function(err) {
                        if (err) return console.log(err);
                    });
                    console.log("Uspješno dodan predmet!");
                }

                //   res.writeHead(200, { 'Content-Type': 'json/application' });
                //  res.end(JSON.stringify(imenik))


            });




            let greska = 0;
            fs.readFile(process.cwd() + '/assets/aktivnosti.txt', 'utf8', function(err, data) {
                if (err) {
                    return console.log(err);
                }
                const ispis = data.toString();
                let pom = data.toString('utf-8').split("\n");
                let imenik = [];

                for (let i = 0; i < pom.length; i++) {
                    let pom1 = pom[i].split(",");
                    let neko = { naziv: pom1[0], tip: pom1[1], pocetak: pom1[2], kraj: pom1[3], dan: pom1[4] };
                    imenik.push(neko);

                    if (req.body['dan'] == pom1[4] && ((req.body['vrijemePocetka'] > pom1[2] && req.body['vrijemePocetka'] < pom1[3]) || (req.body.vrijemeKraja > pom1[2] && req.body.vrijemeKraja < pom1[3])) ||
                        req.body.vrijemePocetka < 8 || req.body.vrijemePocetka > 20 || req.body.vrijemeKraja < 8 || req.body.vrijemeKraja > 20 ||
                        req.body.vrijemeKraja <= req.body.vrijemePocetka) {
                        console.log("Aktivnost nije validna!");
                        greska = 1;
                    }
                }

                if (greska == 0) {
                    console.log(req.body);

                    fs.writeFile(process.cwd() + '/assets/aktivnosti.txt', data + '\n' + req.body['nazivPredmeta'] + "," + req.body['vrijednosti'] + "," + req.body['vrijemePocetka'] + "," + req.body['vrijemeKraja'] + "," + req.body['dan'], function(err) {
                        if (err) return console.log(err);
                    });
                    console.log("Uspješno dodana aktivnost!")
                }





                fs.readFile(process.cwd() + '/assets/predmeti.txt', 'utf8', function(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    const ispis = data.toString();
                    let pom1 = data.toString('utf-8').split("\n");

                    res.render('unosRasporeda', { podaci: pom, podaci1: pom1 });
                });


            });





        });


    */



}