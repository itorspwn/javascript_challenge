// import from data.js
var tableData = data;

//--------NOTES to Self---
// BONUS: Refactor to use Arrow Functions!
//data.forEach((weatherReport) => {
  //var row = tbody.append("tr");
 // Object.entries(weatherReport).forEach(([key, value]) => {
    //var cell = row.append("td");
   // cell.text(value);
 // });
//});
//--------------


// YOUR CODE HERE!
// Define body
var tablebody = d3.select("tbody");
// Define filtered data 
var filteredData = tableData;
// Create function to load data
function ShowData() {
    tablebody.html("");
    filteredData.forEach((dataPoint) => {
    var row = tablebody.append("tr");
    Object.entries(dataPoint).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

var button = d3.select("#filter-btn");
button.on("click", runEnter);
// Complete with run function when button is clicked
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var element = d3.select("#datetime");
    var value = element.property("value");
  if (value) {
        filteredData = filteredData.filter(date => date.datetime === value);
        ShowData();
    }
}
ShowData();

