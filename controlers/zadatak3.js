var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app) {




    let greska = 0;
    fs.readFile(process.cwd() + '/assets/testniPodaci.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        let pom = data.toString('utf-8').split("\n");
        let imenik = [];

        for (let i = 0; i < pom.length; i++) {
            let pom1 = pom[i].split(",");
            let neko = { naziv: pom1[0], tip: pom1[1], pocetak: pom1[2], kraj: pom1[3], dan: pom1[4] };
            imenik.push(neko);


        }

    });

}