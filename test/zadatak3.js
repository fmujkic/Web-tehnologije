var chai = require('chai');
var fs = require('fs');
var chaiHttp = require('chai-http');
let server = require('../app');




var expect = chai.expect();
chai.should();
chai.use(chaiHttp);


let testLinija = [];

fs.readFile(__dirname + '/testniPodaci.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }

    let pom = data.toString('utf-8').split("\n");
    let imenik = [];
    let i = 0;

    do {
        let pom1 = pom[i].split(",");
        let neko = { operacija: pom1[0], ruta: pom1[1], ulaz: pom1[2], izlaz: pom1[3] };



        if (pom1[0].toString() == "GET") {




            it('Treba proci', function(done) {



                chai.request(server).get('/predmeti').end((err, response) => {

                    if (err) console.log(err);
                    response.should.have.status(200);

                    done();
                })
            })


        }

        i++;
    } while (i < pom.length)


});



it('Treba proci', function(done) {



    chai.request(server).get('/predmeti').end((err, response) => {

        if (err) console.log(err);

        response.should.have.status(200);

        done();
    })
})



it('predmeti get', function(done) {



    chai.request(server).post('/predmet').end((err, response) => {

        if (err) console.log(err);

        response.should.have.status(200);

        done();
    })
})
it('aktivnosti get', function(done) {



    chai.request(server).get('/aktivnosti').end((err, response) => {

        if (err) console.log(err);
        response.should.have.status(200);

        done();
    })
})

it('aktivnosti post', function(done) {


    chai.request(server).post('/aktivnost').end((err, response) => {

        if (err) console.log(err);
        response.should.have.status(200);

        done();
    })
})