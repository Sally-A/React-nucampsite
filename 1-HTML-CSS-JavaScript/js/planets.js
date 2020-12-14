const planets = [{ name: "drew", location: "mercury" }, { name: "zach", location: "venus" },
{ name: "jonathan", location: "earth" }, { name: "ray", location: "mars" },
{ name: "sally", location: "jupiter" }, { name: "briana", location: "saturn" }];



// NOW CREATE AN INPUT BOX TYPE BUTTON USING createElement() METHOD.
let button = document.createElement('input');

// SET INPUT ATTRIBUTE 'type' AND 'value'.
button.setAttribute('type', 'button');
button.setAttribute('value', 'Click to Create Table');
button.style.background = 'RGB(233, 230, 61)';
button.style.margin = '20px'; 
button.style.border = '3px, solid, rgb(0, 0, 0)';
button.style.width= '20%';


// ADD THE BUTTON's 'onclick' EVENT.
button.setAttribute('onclick', 'generate_table()');

// FINALLY ADD THE NEWLY CREATED TABLE AND BUTTON TO THE BODY.
document.body.appendChild(button);



function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function generate_table() {

    let cellContent = '';

    // get the reference for the body
    let body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 7; i++) {
        // creates a table row
        let row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            if (i === 0) {
                if (j === 0) {
                    cellContent = 'NAME';
                }
                else {
                    cellContent = 'LOCATION';
                }
            }
            else {

                if (j === 0) {
                    cellContent = capitalize(planets[i - 1].name);
                }
                else {
                    cellContent = capitalize(planets[i - 1].location);
                }
            }
            let cellText = document.createTextNode(cellContent);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
    tbl.style.textAlign = 'center';
    tbl.style.background = 'rgb(240, 240, 6)';
    tbl.style.margin = '20px'; 
    tbl.style.border = '3px, solid, rgb(0, 0, 0)';
    tbl.style.width= '20%';
    tbl.style.fontFamily = 'Helvetica, Arial, sans-serif';
    tbl.style.font = '40px, Bold, Garamond, Helvetica, serif';
}
    

/*
    Try this next exercise to really get some good practice at when, how, and why all this matters:-declare this array as a global variable
    [ {name: "drew", location: "mercury"}, {name: "zach", location: "venus"}, {name: "jonathan", location: "earth"},
    {name: "ray", location: "mars"}, {name: "sally", location: "jupiter"}, {name: "briana", location: "saturn"} ]
    -create a blank HTML doc with <script></script> tags in the body
    -WITHOUT writing ANY html….
    -Put a list of names and locations on the screen in a way that visually makes sense
    -Style your page (using css file OR <style></style> tags) to make it look slightly less boring.
    -Make sure everyone’s name and location are capitalized correctly on the page without typing it differently
    (don’t mess with the array)Give that a shot if you have any extra time. It should be an exercise you can complete in under an hour…..


*/