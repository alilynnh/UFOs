# UFOs
## Overview of Project
### Purpose
The purpose of this project was to create a web application that displays data about UFO sightings and allows the user to filter the data using multiple criteria simultaneously. 

### Resources
- Data Source: data.js
- Languages: 
    - JavaScript ES6
    - HTML
    - CSS
- Tools: 
    - D3
    - Bootstrap

## Results
The web app displays a table of UFO sighting data that can be filtred by any combination of the following criteria:
- Date
- City
- State
- Country
- UFO Shape

To filter the data, simply type values into the input boxes for each criteria that you wish to filter the data on. Examples of appropriate formatting are given in the input boxes. When you press "Enter" or left-click somewhere, the table will update to show the filtered data. To return the table to its original state, simply click "UFO Sightings" in the top left corner of the page, or delete your text from the input boxes and press "Enter". 

**Desktop Demo**
![](Resources/ufo_demo.gif)

## Summary

### Drawbacks
If an individual is not well acquainted with the data in the table, they may not be aware of several values that the data can be filtered by, and thus may not get much use out of the data using the current text entry method. For example, many of the "Shapes" are not conventional geometric shapes (e.g., "light", "fireball", "formation"), so most people would not think to filter the data by those specific values. 

### Recommendations
For criteria like the one mentioned above, it would be more beneficial for the user to have a dropdown menu from which they can select a value instead of a text entry box. This way, they are aware of the possible values at their disposal to filter the data by. 

In addition, it may be helpful to reformat the table in a way that the column headers stay visible as a user scrolls. This may not be that big of an issue now, but if a large amount of data or more columns are added to the table, it may become difficult to navigate and interpret the data in the table if the headers are not visible after scrolling. 