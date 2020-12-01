let assert = chai.assert;
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
      assert.equal(dan, 'Utorak', "Dan treba biti Utorak");
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
    
  });



});
