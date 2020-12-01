function iscrtajRaspored(div, dani, satPocetak, satKraj) {

    if (satKraj <= satPocetak || satPocetak < 0 || satPocetak > 24 || satKraj < 0 || satKraj > 24) {
        div.appendChild(document.createTextNode("Greska"));
        return;
    }

    var r = satKraj - satPocetak;

    var myTableDiv = div;

    var table = document.createElement('TABLE');
    table.setAttribute("id", "tabela");
    var tableBody = document.createElement('TBODY');
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
            th.setAttribute("id", satPocetak);
        }
        tr.appendChild(th);
    }

    for (var i = 0; i < dani.length; i++) {
        var tr = document.createElement('TR');
        tr.setAttribute("id", dani[i])
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


    var satPocetak = document.getElementsByTagName("th")[1].id;

    var row = document.getElementById(dan);

    var p = (vrijemeKraj - vrijemePocetak) * 2;


    var q = (vrijemePocetak - satPocetak) * 2 + 1

    for (var c = 0; c <= q; c++) {

        if (row.getElementsByTagName("td")[c].colSpan > 1) {
            q -= row.getElementsByTagName("td")[c].colSpan - 1;
        }
        if (c > q) alert("Greska");
    }

    for (var i = 0; i < p - 1; i++) {

        if (row.getElementsByTagName("td")[q].colSpan > 1) alert("Greska");
        row.deleteCell(q);
    }

    var cell = row.getElementsByTagName("td")[q];
    cell.colSpan = p;
    cell.appendChild(document.createTextNode(naziv + tip));
    cell.setAttribute("class", "popunjeno");


}



