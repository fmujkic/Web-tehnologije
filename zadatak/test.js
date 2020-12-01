let assert = chai.assert;
describe('Operacije', function() {
 describe('iscrtajRaspored()', function() {
   it('Treba nacrtati raspored', function() {
    Operacije.iscrtajRaspored(okvir,['Ponedjeljak','Utorak','Srijeda','Cetvrtak','Petak'],8,21);
     let tabele = document.getElementsByTagName("table");
     let tabela = tabele[tabele.length-1]
     let redovi = tabela.getElementsByTagName("tr");
     assert.equal(redovi.length, 6,"Broj redova treba biti 27");
   });
   it('Treba nacrtati raspored', function() {
       Operacije.iscrtajRaspored(okvir,['Ponedjeljak','Utorak','Srijeda','Cetvrtak','Petak'],8,21);
       let tabele = document.getElementsByTagName("table");
       let tabela = tabele[tabele.length-1]
       let redovi = tabela.getElementsByTagName("tr");
       let kolone = redovi[2].getElementsByTagName("td");
       let brojPrikazanih = 0;
       for(let i=0;i<kolone.length;i++){
           let stil = window.getComputedStyle(kolone[i])
           if(stil.display!=='none') brojPrikazanih++;
       }
       assert.equal(brojPrikazanih, 27,"Broj kolona treba biti 2");
     });
 });
});
