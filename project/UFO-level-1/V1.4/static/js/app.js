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


function clearInput(val){
  // Clears the values in the input field on the form
  let buttonClear = document.querySelector(val);
  let inputs = document.querySelectorAll('input');


  buttonClear.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '')
  });
};




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
  
  // Clears the values in the input field on the form
  clearInput("#filter-btn");


  //builds table with filtered data   
  buildTable(filterData);  
};

//Reset button function
function onReset(){
  // clears data on the table
  tbody.html('');  

  print("reset button clicked")
  
 // Clears the values in the input field on the form
  clearInput("#reset-btn");


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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 let filters = {};
//advanced filter function
function avdFilter(){ 
  
  let filteredDATA = tableData;
  
  let selectInput = d3.select(this).select('input');
  let inputValue = selectInput.property('value');
  let inputID = selectInput.attr('id');

  if(inputValue){
    filters[inputID] = inputValue;
  }
  else{
    delete filters[inputID];
  }

  Object.entries(filters).forEach(([key,value]) =>{
    filteredDATA = filteredDATA.filter(trow => trow[key] === value);
  });

  print('Apply pressed');
  print(filters);
  buildTable(filteredDATA);
};

d3.select("#Apply_filter_btn").on('click', avdFilter);
// d3.selectAll(".filter").on("change", avdFilter);

