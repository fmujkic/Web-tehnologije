function iscrtajRaspored(div, dani, satPocetak, satKraj) {

    if (satKraj <= satPocetak || satPocetak < 0 || satPocetak > 24 || satKraj < 0 || satKraj > 24) {
        div.appendChild(document.createTextNode("Greska"));
        return ("Greska");
    }

    var r = satKraj - satPocetak;

    var myTableDiv = div;

    var table = document.createElement('TABLE');

    var a = div.getElementsByTagName("table").length;


    table.setAttribute("id", a);
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);


    table.appendChild(tableBody);


    var tr = document.createElement('TR');
    tr.setAttribute("class", "naslov");
    tableBody.appendChild(tr);
    for (var j = 0; j <= r; j++) {
        var th = document.createElement('TH');
        if (j > 0) {
            th.setAttribute("colspan", "2");
        }

        var h = j + satPocetak - 1;

        if (h != satKraj && (h < 13 && h % 2 == 0) || (h > 13 && h % 2 == 1)) {
            th.appendChild(document.createTextNode((h) + ":00"));

        }
        th.setAttribute("id", h);
        tr.appendChild(th);
    }

    for (var i = 0; i < dani.length; i++) {
        var tr = document.createElement('TR');
        tr.setAttribute("id", dani[i] + a)
        tableBody.appendChild(tr);

        for (var j = 0; j < r * 2 + 1; j++) {
            var td = document.createElement('TD');

            if (j == 0) {
                var td = document.createElement('TD');
                td.setAttribute("class", "posebna");

                td.appendChild(document.createTextNode(dani[i]));
            }

            else if (j % 2 == 1) {
                td.style.borderLeft = '1px solid black';
            }

            if (j == 1) {
                td.setAttribute("class", satPocetak);
            }
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}


function dodajAktivnost(raspored, naziv, tip, vrijemePocetak, vrijemeKraj, dan) {

    if (raspored == null || vrijemeKraj <= vrijemePocetak || vrijemePocetak < 0 || vrijemePocetak > 24 || vrijemeKraj < 0 || vrijemeKraj > 24) alert("Greska");

        

        let tabele = raspored.getElementsByTagName("table");
        let brTabele =tabele.length-1;

    
        if(brTabele == -1) return("Tabela ne postoji");
    
        var pom = dan + brTabele;

        var row = document.getElementById(pom);
        var satPocetak = document.getElementsByTagName("th")[1].id;
        var satKraj = document.getElementsByTagName("tr")[0].lastChild.id;

        
    if(vrijemePocetak<satPocetak ||vrijemeKraj<satPocetak ||vrijemePocetak>satKraj ||vrijemeKraj>satKraj) return("Taj sat ne postoji");
        
    
        
        if(row == null) return("Taj dan ne postoji");
    
        var p = (vrijemeKraj - vrijemePocetak) * 2;
    
    
        var q = (vrijemePocetak - satPocetak) * 2 + 1
    
        for (var c = 0; c <= q; c++) {
    
            if (row.getElementsByTagName("td")[c].colSpan > 1) {
                q -= row.getElementsByTagName("td")[c].colSpan - 1;
            }
            if (c > q) {
                alert("Greska");
                return("Dodana aktivnost na zauzeto mjesto");
            }
        }
    
        for (var i = q; i < p + q; i++) {
    
            if (row.getElementsByTagName("td")[i].colSpan > 1) {
                alert("Greska");
                return("Dodana aktivnost na zauzeto mjesto");
            }
        }
        for (var i = 0; i < p - 1; i++) {
    
           
            row.deleteCell(q);
        }
        var cell = row.getElementsByTagName("td")[q];
        cell.colSpan = p;
    
        
        
    
        var br = document.createElement("br");
    
            cell.appendChild(document.createTextNode(naziv));
            cell.appendChild(br);
            cell.appendChild(document.createTextNode(tip));
    
        
    
        cell.setAttribute("class", "popunjeno");



}



