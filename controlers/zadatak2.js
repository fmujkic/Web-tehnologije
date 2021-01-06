var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app) {


    app.get('/predmeti', function(req, res) {

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
            }
            res.writeHead(200, { 'Content-Type': 'json/application' });


            res.end(JSON.stringify(imenik))


            //res.render('predmeti',{podaci:imenik});
        });

    });


    app.get('/aktivnosti', function(req, res) {

        fs.readFile(process.cwd() + '/assets/aktivnosti.txt', 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            const ispis = data.toString();
            let pom = data.toString('utf-8').split("\r\n");
            let imenik = [];



            for (let i = 0; i < pom.length; i++) {
                let pom1 = pom[i].split(",");
                let neko = { naziv: pom1[0], tip: pom1[1], pocetak: pom1[2], kraj: pom1[3], dan: pom1[4] };
                imenik.push(neko);
            }

            res.writeHead(200, { 'Content-Type': 'json/application' });
            res.end(JSON.stringify(imenik))



            //res.render('dodavanjeAktivnosti',{podaci:imenik});
        });

    });




    app.get('/predmet/:naziv/aktivnost/', function(req, res) {

        predmet = req.params.naziv;

        let vrijednosti = req.url.split('/');
        let predmetZaCrome = vrijednosti[2].substring(1);

        fs.readFile(process.cwd() + '/assets/aktivnosti.txt', 'utf8', function(err, data) {
            if (err) {
                return console.log(err);
            }
            const ispis = data.toString();
            let pom = data.toString('utf-8').split("\r\n");
            let imenik = [];



            for (let i = 0; i < pom.length; i++) {
                let pom1 = pom[i].split(",");
                let neko = { naziv: pom1[0], tip: pom1[1], pocetak: pom1[2], kraj: pom1[3], dan: pom1[4] };
                if (predmetZaCrome == pom1[0])
                    imenik.push(neko);
            }

            res.writeHead(200, { 'Content-Type': 'json/application' });
            res.end(JSON.stringify(imenik))



            //res.render('dodavanjeAktivnosti',{podaci:imenik});
        });

    });


    app.post('/predmet', urlencodedParser, function(req, res) {



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

                if (pom[i] == req.body['naziv']) {
                    console.log("Naziv predmeta postoji!");
                    postoji = 1;
                }
            }

            console.log(req.body['naziv']);

            if (postoji == 0) {
                imenik.push(req.body);

                fs.writeFile(process.cwd() + '/assets/predmeti.txt', data + '\n' + req.body['naziv'], function(err) {
                    if (err) return console.log(err);
                });
                console.log("Uspješno dodan predmet!");
            }
            res.writeHead(200, { 'Content-Type': 'json/application' });
            res.end(JSON.stringify(imenik))


        });

    });


    app.post('/aktivnost', urlencodedParser, function(req, res) {
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
            res.render('dodavanjeAktivnosti', { podaci: imenik });


        });


    });



    app.delete('/predmet/:naziv', function(req, res) {

        predmet = req.params.naziv;

        let vrijednosti = req.url.split('/');
        let predmetZaCrome = vrijednosti[2].substring(1);

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

                if (pom[i] == predmet) {
                    console.log("Predmet uspjesno obrisan!");
                    postoji = 1;
                } else
                    imenik.push(neko);

            }

            console.log(predmet);

            if (postoji == 0) {
                console.log("Predmet ne postoji");

                fs.writeFile(process.cwd() + '/assets/predmeti.txt', data + '\n' + predmet, function(err) {
                    if (err) return console.log(err);
                });
                console.log("Uspješno dodan predmet!");
            }
            res.writeHead(200, { 'Content-Type': 'json/application' });
            res.end(JSON.stringify(imenik))


        });

    });




    app.delete('/aktivnost/:naziv', function(req, res) {

        predmet = req.params.naziv;

        let vrijednosti = req.url.split('/');
        let predmetZaCrome = vrijednosti[2].substring(1);

        let postoji = 0;
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


                if (pom1[0] == predmet) {
                    console.log("Predmet uspjesno obrisan!");
                    postoji = 1;
                } else
                    imenik.push(neko);

            }

            console.log(predmet);

            if (postoji == 0) {
                console.log("Predmet ne postoji");

                fs.writeFile(process.cwd() + '/assets/predmeti.txt', data + '\n' + predmet, function(err) {
                    if (err) return console.log(err);
                });
                console.log("Uspješno dodan predmet!");
            }
            res.writeHead(200, { 'Content-Type': 'json/application' });
            res.end(JSON.stringify(imenik))


        });

    });



    app.delete('/all', function(req, res) {

        fs.writeFile(process.cwd() + '/assets/predmeti.txt', "", function(err) {
            if (err) return console.log(err);
        });

        fs.writeFile(process.cwd() + '/assets/aktivnosti.txt', "", function(err) {
            if (err) return console.log(err);
        });



    });




}