# UFOs
Creating dynamic content with Javascript

## Overview of the analysis

In this project, we have built a dynamic webpage that accepts user inputs and adjust accordingly. JavaScript is the primary coding language of this project and the webpage is built by inserting Javascript into an HTML page.

We have built a table using data stored in a Javascript array. Then we have created multiple filters to make table responsive to user input and placed the table into HTML file for visualization.

Basic HTML, Bootstrap and CSS are used to build and style entire page.

## Results

### Event Listner and Functions to filter table
- We have created an event listener that detects changes to each filter
<img width="554" alt="Screen Shot 2022-09-15 at 7 58 11 AM" src="https://user-images.githubusercontent.com/107566776/190398017-65dc51b1-f93c-45a1-bcde-b81b72cea101.png">

- We have created a function that saves the element, value and id of the filter that was changed
<img width="589" alt="Screen Shot 2022-09-15 at 8 00 39 AM" src="https://user-images.githubusercontent.com/107566776/190398490-0ebf10d7-1975-4bfe-a762-ba51a59b5264.png">

- We have created a function that loops through all the filters and keeps any data that matches the filter value
<img width="579" alt="Screen Shot 2022-09-15 at 8 02 20 AM" src="https://user-images.githubusercontent.com/107566776/190398859-fc343c12-3581-44fe-b0dc-99c514c2715e.png">

### UFO sightings Webpage
<img width="789" alt="Screen Shot 2022-09-15 at 8 29 14 AM" src="https://user-images.githubusercontent.com/107566776/190404133-d7ffe085-b075-4814-aca6-9e609fad8940.png">

### Five list elements for filtering the table

<img width="559" alt="Screen Shot 2022-09-15 at 7 54 03 AM" src="https://user-images.githubusercontent.com/107566776/190397312-468ee998-a7a3-403f-a3e9-5758157b1943.png"><img width="236" alt="Screen Shot 2022-09-15 at 7 48 03 AM" src="https://user-images.githubusercontent.com/107566776/190396136-4b04862c-723e-4b8f-957d-a1aee18906a3.png">

### Dynamic webpage that filters the table correctly based on user input

The webpage filters the table correctly when input of state is entered as 'ca' and shape is entered as 'triangle'
<img width="1440" alt="Screen Shot 2022-09-15 at 8 04 45 AM" src="https://user-images.githubusercontent.com/107566776/190399811-3a08bad0-5a17-47bd-af5b-b9f49df57a43.png">


## Summary 
### Drawback of the design
The main drawback of this webpage is that user must know the inputs to filter the table correctly. The filter doesnot show the list of items that user can select. The inputs are case sensitive and inputs must be accurate to display the filter result. For instance, the table doesnot filter if user enters "Benton" in city instead of "benton".

### Recommendations
1. The filter should be made case insensitive that allows user to input upper case or lower case.
<img width="791" alt="Screen Shot 2022-09-15 at 8 55 50 AM" src="https://user-images.githubusercontent.com/107566776/190409437-7a9bb1b7-c6f1-469d-839c-eb4ffbd44951.png">


2. The filter should show a list of items that user can select from the drop down menu. It increases user interaction with the webpage to investigate UFO sightings.
