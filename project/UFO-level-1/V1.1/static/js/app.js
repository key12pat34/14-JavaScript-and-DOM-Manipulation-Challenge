// ###################################################
// ###############  LEVEL 1  #########################
// ###################################################

// from data.js
var tableData = data;

// function for print statments
function print(value){console.log(value)};


// Get a reference to the table body
var tbody = d3.select("tbody");

// styling the table
let table = d3.select('table');
table.attr("class", "table table-dark table-striped table-hover")




function ufoTable (item){
    // clears data on the table
    tbody.html('');
    // prints data array to console
    print(item);

    // forEach function for to append data into table 
    item.forEach(item => {
        // creates table row for each data row
        let trow = tbody.append('tr');
        
        // each [key:value] is taken for each item from data.js
        Object.entries(item).forEach(([key,value]) =>{
            // each value is appended to each key per row
            let tdata=trow.append('td');
            tdata.text(value);
        });        
    });
}



function onClick(){
  // clears data on the table
  tbody.html('');

  
}

ufoTable(tableData);














// ###################################################
// ###############  LEVEL 2  #########################
// ###################################################