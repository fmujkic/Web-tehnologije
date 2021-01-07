var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../app');

chai.should();
chai.use(chaiHttp);

describe("Test", () => {

    console.log('Testira se');

    describe('Prvi test', () => {

        it('Treba proci', (done) => {

            chai.request(server)
                .get("/predmeti")
                .end((err, response) => {

                    response.should.have.status(200);

                })

        })


    })








});


















/*
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
            let neko = { HTTP: pom1[0], ruta: pom1[1], ulaz: pom1[2], izlaz: pom1[3] };
            imenik.push(neko);


        }

    });






/*


    describe('Operacije', function () {
      describe('iscrtajRaspored()', function () {
        it('Treba nacrtati raspored koji ima sate i 5 redova', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          let tabele = document.getElementsByTagName("table");
          let tabela = tabele[tabele.length - 1]
          let redovi = tabela.getElementsByTagName("tr");
          assert.equal(redovi.length, 6, "Broj redova treba biti 6");
        });
        it('Treba nacrtati raspored koji ima 27 kolona', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          let tabele = document.getElementsByTagName("table");
          let tabela = tabele[tabele.length - 1]
          let redovi = tabela.getElementsByTagName("tr");
          let kolone = redovi[2].getElementsByTagName("td");
          let brojPrikazanih = 0;
          for (let i = 0; i < kolone.length; i++) {
            let stil = window.getComputedStyle(kolone[i])
            if (stil.display !== 'none') brojPrikazanih++;
          }
          assert.equal(brojPrikazanih, 27, "Broj kolona treba biti 27");
        });
        it('Drugi dan treba biti Utorak', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          let tabele = document.getElementsByTagName("table");
          let tabela = tabele[tabele.length - 1]
          let redovi = tabela.getElementsByTagName("tr");
          let dan = redovi[2].id;
          assert.equal(dan, 'Utorak2', "Dan treba biti Utorak");
        });
        it('Prvi sat treba biti 8', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          let tabele = document.getElementsByTagName("table");
          let tabela = tabele[tabele.length - 1]
          let redovi = tabela.getElementsByTagName("tr");
          let kolone = redovi[2].getElementsByTagName("td");
          assert.equal(kolone[1].className, 8, "Prvi sat je 8");
        });
        it('Zadnji sat treba biti 20', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          let tabele = document.getElementsByTagName("table");
          let tabela = tabele[tabele.length - 1]
          let redovi = tabela.getElementsByTagName("tr");
          let kolone = redovi[0].getElementsByTagName("th");
          assert.equal(kolone[13].id, 20, "Zadnji sat je 20");
        });
        it('Treba ispisati gresku-poslan negativan opseg vremena ', function () {
          var p=Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 5);
          
          assert.equal(p, "Greska", "Treba ispisati gresku");
        });
        it('Treba ispisati gresku-poslan negativan početak vremena ', function () {
          var p=Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], -8, 5);
          
          assert.equal(p, "Greska", "Treba ispisati gresku");
        });
        it('Treba ispisati gresku-poslan negativan kraj vremena ', function () {
          var p=Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, -5);
          
          assert.equal(p, "Greska", "Treba ispisati gresku");
        });
        it('Treba ispisati gresku-poslan prevelik početak vremena ', function () {
          var p=Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 35);
          
          assert.equal(p, "Greska", "Treba ispisati gresku");
        });
        it('Treba ispisati gresku-poslan prevelik kraj vremena ', function () {
          var p=Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 28, 35);
          
          assert.equal(p, "Greska", "Treba ispisati gresku");
        });
      
      
      });
    
      describe('dodajAktivnost()', function () {
    this.timeout(100000000);
    
        it('Treba dodati predavanje iz OOI u utorak od 12 do 15', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          Operacije.dodajAktivnost(okvir,'OOI','predavanje',12,15,'Utorak');
    
          let tabele = document.getElementsByTagName("table");
          let tabela = tabele[tabele.length - 1]
          let redovi = tabela.getElementsByTagName("tr");
          let kolone = redovi[2].getElementsByTagName("td");
          let predmetCell = kolone[9].innerHTML;
          assert.equal(predmetCell, 'OOI<br>predavanje', "Predavanje iz OOI treba biti u utorak od 12 do 15");
        });
    
    
        it('Treba dodati tutorijal iz WT u petak od 9 do 12', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          Operacije.dodajAktivnost(okvir,'WT','tut',9,12,'Petak');
    
          
          let red = document.getElementById("Petak6");
          let kolone = red.getElementsByTagName("td");
          let predmetCell = kolone[3].innerHTML;
          assert.equal(predmetCell, 'WT<br>tut', "Tutorijal iz WT treba biti u petak od 9 do 12");
        });
    
    
        it('Treba dodati 2 tutorijala iz WT u petak od 9 do 12 i od 12 d0 16', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          Operacije.dodajAktivnost(okvir,'WT','tut',9,12,'Petak');
          Operacije.dodajAktivnost(okvir,'WT','tut',12,16,'Petak');
          
          let red = document.getElementById("Petak7");
          let kolone = red.getElementsByTagName("td");
          let predmetCell = kolone[3].innerHTML;
          assert.equal(predmetCell, 'WT<br>tut', "Tutorijal iz WT treba biti u petak od 9 do 12");
           predmetCell = kolone[4].innerHTML;
          assert.equal(predmetCell, 'WT<br>tut', "Tutorijal iz WT treba biti u petak od 12 do 16");
        });
    
    
        it('Testiranje imena dana koji trebaju da budu zivotinje', function () {
          Operacije.iscrtajRaspored(okvir, ['Majmun', 'Antilopa', 'Konj', 'Slon'], 8, 21);
          Operacije.dodajAktivnost(okvir,'WT','tut',9,12,'Konj');
      
          
          let red = document.getElementById("Konj8");
          let kolone = red.getElementsByTagName("td");
          let predmetCell = kolone[3].innerHTML;
          assert.equal(predmetCell, 'WT<br>tut', "Imena dana trebaju da budu zivotinje");
          
          
        });
    
    
    
    
    
        it('Testiranje preklapanja sa prednje strane', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          Operacije.dodajAktivnost(okvir,'WT','tut',9,12,'Srijeda');
          var c=Operacije.dodajAktivnost(okvir,'WT','predavanje',8,10,'Srijeda');
          assert.equal(c, "Dodana aktivnost na zauzeto mjesto", "Preklapanja sa prednje strane treba da baci error i dodavanje bude zanemareno");
        });
    
        it('Testiranje preklapanja sa zadnje strane', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          Operacije.dodajAktivnost(okvir,'WT','predavanje',8,10,'Srijeda');
          var c=Operacije.dodajAktivnost(okvir,'WT','tut',9,12,'Srijeda');
          assert.equal(c, "Dodana aktivnost na zauzeto mjesto", "Preklapanja sa zadnje strane treba da baci error i dodavanje bude zanemareno");
        });
    
        it('Testiranje preklapanja sa unutrasnje strane', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          Operacije.dodajAktivnost(okvir,'WT','predavanje',8,15,'Srijeda');
          var c=Operacije.dodajAktivnost(okvir,'WT','tut',11,12,'Srijeda');
          assert.equal(c, "Dodana aktivnost na zauzeto mjesto", "Preklapanja sa unutrasnje strane treba da baci error i dodavanje bude zanemareno");
        });
    
    
        it('Testiranje nepostojanja dana', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          var c=Operacije.dodajAktivnost(okvir,'WT','tut',11,12,'Subota');
          assert.equal(c, "Taj dan ne postoji", "Ako dan ne postoji ne treba da doda nista");
        });
    
    
        it('Testiranje nepostojanja tabele', function () {
          var c=Operacije.dodajAktivnost(okvir1,'WT','tut',11,12,'Srijeda');
          assert.equal(c, "Tabela ne postoji", "Ako tabela ne postoji treba da baci error");
        });
    
        it('Testiranje nepostojanja sata', function () {
          Operacije.iscrtajRaspored(okvir, ['Ponedjeljak', 'Utorak', 'Srijeda', 'Cetvrtak', 'Petak'], 8, 21);
          var c=Operacije.dodajAktivnost(okvir,'WT','tut',22,23,'Srijeda');
          assert.equal(c, "Taj sat ne postoji", "Ako dan ne postoji ne treba da doda nista");
        });
    
    
        
      });
    
    
    
    });
}   
*/