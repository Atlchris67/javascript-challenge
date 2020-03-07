// from data.js
var tableData = data;

var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(function (ufoSighting) {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});



var button = d3.select("#filter-btn");

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

button.on("click", function () {

    tbody.html("");

    var datetime = d3.select("#datetime");
    var value = datetime.property("value");
    if (isValidDate(value)){
    var filteredData = tableData.filter(sighting => Date.parse(sighting.datetime) === Date.parse(value));


    filteredData.forEach(function (selections) {


        var row = tbody.append("tr");
        Object.entries(selections).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    }else{
        alert("Please enter valid date");
    }


});