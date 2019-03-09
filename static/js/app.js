// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data);

// Prevent the page from refreshing
// d3.event.preventDefault();


function buildTable(data) {
// First, clear out any existing data
    tbody.html("");
  
// Next, loop through each object in the data
// and append a row and cells for each value in the row
    data.forEach((dataRow) => {
// Append a row to the table body
    var row = tbody.append("tr");
  
// Loop through each field in the dataRow and add
// each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }

function buttonClick(){
// Prevent the page from refreshing
    d3.event.preventDefault();

    var date_time = d3.select("#datetime");
    var date = date_time.property("value");
    console.log(date)
    var data_filter = tableData;
    data_filter = data_filter.filter(row => row.datetime === date);
    console.log(data_filter)
    buildTable(data_filter)
}



//Execute function
d3.selectAll("#filter-btn").on("click", buttonClick);
buildTable(tableData);
