// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Building data table
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