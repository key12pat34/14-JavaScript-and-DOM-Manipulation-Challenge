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
    item.forEach((item) => {
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
// activates the ufoTable function with 'tableData' data
ufoTable(tableData);




function onClick(){ 
  let filterData = tableData;
  
  // date selets the datetime key ands its value
  let dateField = d3.select("#datetime");
  let dateValue = dateField.property("value");
  
  if (dateValue) {
      // applying filter to filterData ==> only keeps item.datetime values = data
      filterData = filterData.filter((trow) => trow.datetime === dateValue);
  };
  print(dateValue);
  print("filter button clicked");
  
  //builds table with filtered data   
  ufoTable(filterData);
  
};

function onReset(){
  // clears data on the table
  tbody.html('');  

//   let form = document.getElementById("datetime");
//   form.reset();

  print("reset button clicked")
  
  //builds table with data    
  ufoTable(tableData);

  document.forms["datetime"].reset();

}

d3.select("#filter-btn").on('click', onClick);
d3.select("#reset-btn").on('click', onReset);


{/* <input class="form-control" id="datetime" type="text" placeholder="1/11/2010"></input> */}














// ###################################################
// ###############  LEVEL 2  #########################
// ###################################################