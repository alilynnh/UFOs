// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// BUILD DATA TABLE
function buildTable(data) {
    // clear table
    tbody.html("");

    // for loop
    data.forEach((dataRow) => {  
        // append a row to table           
        let row = tbody.append("tr");  

        // add value from each object into a cell     
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });

    });
}

// FILTER BUTTON
function handleClick() {
    // get datetime value
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check if date was entered and filter data using date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild table using filtered data
    buildTable(filteredData);
};

// listen for button
d3.selectAll("#filter-btn").on("click", handleClick);

// build table when page loads
buildTable(tableData);
