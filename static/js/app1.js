// import the data from data.js
var tableData=data;

//Reference the HTML table using d3>>javascript library that produces sophisticated and dynamic graphics
//in HTML webpage
var tbody=d3.select("tbody"); //tbody html tag

//clear existing data
function buildTable(data){
    tbody.html("");  //creates blank canvas in html,,clear existing data

//use forEach to loop through each row of data
    data.forEach((dataRow)=>{   //dataRow represents each row of data
        let row=tbody.append("tr"); //find tbody tag and add a table row'tr'

        //Add function to loop through each field in dataRow argument
        Object.values(dataRow).forEach((val)=>{  //object.values references one object from dataRow
            //forEach(val) specifies one object per row
            let cell=row.append("td");  //append data into table
            cell.text(val);             //adds values from the object

             });
    });
}

//Add filters
function handleClick(){
    let date=d3.select("#datetime").property("value");
    //.select selects very first element that matches selector string i.e. #datetime
    // .property("value") stores the information in date variable
    let filteredData=tableData;

    //check to see if a date was entered and filter the data using that date
    if (date){
        filteredData=filteredData.filter(row=>row.datetime===date)
    } //shows only the rows where date equals date filter created in seconda line
    //=== matches exact value

    //Rebuild the table with filtered data
    buildTable(filteredData);
    
}

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click",handleClick); //D3 executes handleClick function when the
//button with an id of filter-btn is clicked

//Build the table when the page loads
buildTable(tableData);