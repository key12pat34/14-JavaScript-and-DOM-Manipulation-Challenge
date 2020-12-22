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


function buildTable(item){
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
// activates the buildTable function with 'tableData' data
buildTable(tableData);


//Date filter function
function dateFilter(){ 
  let filterData = tableData;
  
  // date selets the datetime key ands its value
  let dateValue = d3.select("#datetime").property("value");
  
  
  if (dateValue) {
      // applying filter to filterData ==> only keeps item.datetime values = data
      filterData = filterData.filter((trow) => trow.datetime === dateValue);
  };
  print(dateValue);
  print("date filter button clicked");

  //builds table with filtered data   
  buildTable(filterData);  
};

//Reset button function
function onReset(){
  // clears data on the table
  tbody.html('');  

  print("reset button clicked")
  
 // Clears the values in the input field on the form
  let buttonClear = document.querySelector('#reset-btn');
  let inputs = document.querySelectorAll('input');


  buttonClear.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '')
  });

  //builds table with data    
  buildTable(tableData);

}


d3.select("#filter-btn").on('click', dateFilter);
d3.select("#reset-btn").on('click', onReset);



// ###################################################
// ###############  LEVEL 2  #########################
// ###################################################


//Hides the Advanced Filters on load
window.onload = function() {
  document.getElementById('avdDiv').style.display = 'none';
};


//Function to open and close the Advanced Filter tab
function opencloseAVDFilter() {
  var x = document.getElementById("avdDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
    print("Advanced filter buttone clicked (closed)");
  } else {
    x.style.display = "block";
    print("Advanced filter buttone clicked (open)");
  }
}

d3.select("#adv-btn").on('click', opencloseAVDFilter);



//city filter function
function avdFilter(){ 
  
  filter_condition.forEach((key, i) => filter_array[key] = filter_input[i]);
  console.log(filter_array);

// filter the table
  adv_filter_data= tableData.filter(function(item) {
      for (var key in filter_array) {
          if (item[key] === undefined || item[key] != filter_array[key])
              return false;
          }
      return true;
      });

  buildTable(adv_filter_data);
};

d3.select("#Apply_filter_btn").on('click', avdFilter);




