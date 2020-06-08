// establishing connection where grid will go
const main = document.querySelector('#main');

//random rgb color generator
function random() {
            let red = Math.floor((Math.random()*255) + 1);
            let green = Math.floor((Math.random()*255) + 1);
            let blue = Math.floor((Math.random()*255) + 1);     
        let color = `rgb(${red}, ${green}, ${blue})`
        return color;
}

//makes grid with JS/DOM manipulation
function makeGrid (row) {
main.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
    
    // first for loop creates the left most column
    for (let i = 0; i < row; i++) {
const rowDiv = document.createElement('div');

            rowDiv.style.background = 'white';
            rowDiv.style.width = '100%';
            rowDiv.style.height = '100%';
            rowDiv.addEventListener("mouseover", mouseOver, false);
        main.appendChild(rowDiv);
            function mouseOver() {
                if (colorChange == true) {
                    rowDiv.style.background = random(); 
                 } else {
                    rowDiv.style.background = 'black';
                 }
            }
        
        // second for loop creates the rest of the grid based on the first column count
        for (let j = 0; j < row - 1; j++) {
            const colDiv = document.createElement('div');
                colDiv.style.background = 'white';
                colDiv.style.width = '100%';
                colDiv.style.height = '100%';
            colDiv.addEventListener("mouseover", mouseOver, false);
            main.appendChild(colDiv);
            function mouseOver() {
                if (colorChange == true) {
                   colDiv.style.background = random(); 
                } else {
                   colDiv.style.background = 'black';
                }
            }
    }
  }
}

// button for letting user pick their own row count
const but = document.querySelector('#reset');
// button for letting user choose black or color sketch mode
const colorMode = document.querySelector('#color_mode')

// what the grid autopopulates as when loaded
makeGrid(5)

// adding functionality to the refresh button. Ran into another problem here; the if/else if statements only run once, so if the user enters 0, a negative number, or NaN more than one time, the grid just doesn't load. I couldn't quite figure out a solid solve, so I just made an alert that says you get 3 and then sets the size automatically. 
but.addEventListener('click', function newGrid() {
    clearGrid();
    gridDimension = prompt('How many rows would you like?');
        if (gridDimension > 0) {
            makeGrid(gridDimension);
        } else if (gridDimension != Number || gridDimension == 0 || gridDimension < 0) {
            alert(`You didn't enter an acceptable number. You get 3.`);
            makeGrid(3)
        }
});

// clears previous grid by removing main's children so the new grid with the user's choice can be created without error
function clearGrid() {
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
}

// really sloppy way to fix a bug. colorMode fires twice when the button is clicked and I couldn't quite find out why, so I just made an array with true/false repeating in twos. It has a limit to the number of times it'll work, but let's be honest; if you're using this site that much you're probably just wasting time.
const colorChangeArr = [false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true,];
let counter = 0;

//establishing connection between the color changing controls
let colorChange = colorChangeArr[counter];
console.log(colorChange)
console.log(counter)

// increases the counter, which changes colorMode's true/false status. This is where the error is occuring, I believe. 
colorMode.addEventListener('click', function() {
    counter += 1;
    return colorChange = colorChangeArr[counter]
});

