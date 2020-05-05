// @TODO: YOUR CODE HERE!
let svgWidth = 960;
let svgHeight = 500;

let margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

let width = svgWidth - margin.left - margin.right;
let height = svgHeight - margin.top - margin.bottom;

//  SVG group that will hold our chart
let svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

let chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// load Data, using only d3.csv will not find the file
// let table_data = d3.csv('assets/data/data.csv');
// console.log(table_data);
d3.csv('assests/data/data/csv').then(function(tdata) {
});
// Parse data as numbers
  tdata.forEach(function(tabledata) {
    tabledata.poverty = +tabledata.poverty;
    tabledata.healthcare = +tabledata.healthcare;
    tabledata.age = +tabledata.age;
    tabledata.income = +tabledata.income;
    tabledata.smokes = +tabledata.smokes;
    tabledata.obesity = +tabledata.obesity;

  });