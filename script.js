const main = document.querySelector('main');

function makeGrid (row) {
main.style.gridTemplateColumns = `repeat(${row}, 1fr)`;

    for (let i = 0; i < row; i++) {
        const rowDiv = document.createElement('div');
            rowDiv.style.background = 'white';
            rowDiv.style.width = '100%';
            rowDiv.style.height = '100%';
            rowDiv.addEventListener("mouseover", mouseOver, false);
            rowDiv.addEventListener("mouseout", mouseOut, false);
        main.appendChild(rowDiv);
            function mouseOver() {
                rowDiv.style.background = "blue";
            }
            function mouseOut () {
                rowDiv.style.background = "blue";
            }
    
    for (let j = 0; j < row - 1; j++) {
        const colDiv = document.createElement('div');
            colDiv.style.background = 'white';
            colDiv.style.width = '100%';
            colDiv.style.height = '100%';
            colDiv.addEventListener("mouseover", mouseOver, false);
            colDiv.addEventListener("mouseout", mouseOut, false);
        main.appendChild(colDiv);
            function mouseOver() {
                colDiv.style.background = "blue";
            }
            function mouseOut () {
                colDiv.style.background = "blue";
            }
    }

    }
}

makeGrid(16)


/*

    for (let j = 0; j < column; j++) {
        console.log(j)
        main.appendChild(newDiv);
    }

*/