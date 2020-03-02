let array = [];

function showTable() {
    let html = "<table  border='1'><tr><th>STT</th> <th>Name Items</th> </tr>";
    for (let i = 0; i < array.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += array[i];
        html += "</td>";
        html += "<td>";
        html += "<button onclick='editItems(" + "this," + i + ")'>edit</button>";
        html += "</td>";
        html += "<td>";
        html += "<button onclick='removeItems(" + "this," + i + ")'>remove</button>";
        html += "</td>";
        html += "</tr>"
    }
    html += "</table>";

    document.getElementById("outputItem").innerHTML = html;
}

function addItems() {
    let name = document.getElementById("item").value;
    array.push(name);
    showTable();
    document.getElementById("item").value = "";
}

function removeItems(removebutton, index) {
    let isAgree = confirm("ban muon co deletes");
    if (isAgree) {
        array.splice(index, 1);
    }
    showTable();
}

function editItems(editbutton, index) {
    let checkInput = prompt("edit lai", array[index]);
    if (checkInput !== null) {
        array[index] = checkInput;
    }
    showTable();
}
