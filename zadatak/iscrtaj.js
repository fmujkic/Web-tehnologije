function addTable(div,dani,satPocetak,satKraj) {

    if(satKraj<=satPocetak || satPocetak<0 || satPocetak>24 || satKraj<0 || satKraj>24){
      div.appendChild(document.createTextNode("Greska"));  
      return;
    }
    
    r=satKraj-satPocetak;

    var myTableDiv = div;

    var table = document.createElement('TABLE');
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);


    var tr = document.createElement('TR');
    tr.setAttribute("class", "naslov");
    tableBody.appendChild(tr);
    for (var j = 0; j <= r; j++) {
        var th = document.createElement('TH');
        if(j>0){
            th.setAttribute("colspan", "2");
        }
        
        if(j%2==1){
            th.appendChild(document.createTextNode((j+satPocetak-1)+":00"));
        }
        tr.appendChild(th);
    }

    for (var i = 0; i < dani.length; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < r*2+1; j++) {
            var td = document.createElement('TD');

            if (j == 0) {
                var td = document.createElement('TD');
                td.setAttribute("class", "posebna");
                td.appendChild(document.createTextNode(dani[i]));
            }

            else if (j % 2 == 1) {
                td.style.borderLeft = '1px solid black';
            }
            // td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}