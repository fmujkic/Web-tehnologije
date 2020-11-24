function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.style.border = '1px solid black';
    table.style.borderCollapse = "collapse";
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 5; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 26; j++) {
        var td = document.createElement('TD');
        td.width = '20';
        td.height='75';
        td.style.border = '1px solid black';
        td.style.borderCollapse = "collapse";
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }