// import from data.js
var tableData = data;

// YOUR CODE HERE!
// Define body
var tablebody = d3.select("tbody");

// Define filtered data 
var filteredData = tableData;

// Create function to load data
function ShowData() {
    tablebody.html("");
    filteredData.forEach((insight) => {
    var row = tablebody.append("tr");
    Object.entries(insight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

var button = d3.select("#filter-btn");
button.on("click", runEnter);

// Complete with run function
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    if (inputValue) {
        filteredData = filteredData.filter(date => date.datetime === inputValue);
        ShowData();
    }
}
ShowData();

