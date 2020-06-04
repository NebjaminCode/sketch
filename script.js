const main = document.querySelector('#main');

function random() {
    for (let i = 0; i < 255; i++) {
            let red = Math.floor((Math.random()*255) + 1);
            let green = Math.floor((Math.random()*255) + 1);
            let blue = Math.floor((Math.random()*255) + 1);     
        let color = `rgb(${red}, ${green}, ${blue})`
        return color;
    }
}

function makeGrid (row) {
main.style.gridTemplateColumns = `repeat(${row}, 1fr)`;

    for (let i = 0; i < row; i++) {
const rowDiv = document.createElement('div');

            rowDiv.style.background = 'white';
            rowDiv.style.width = '100%';
            rowDiv.style.height = '100%';
            rowDiv.addEventListener("mouseover", mouseOver, false);
        main.appendChild(rowDiv);
            function mouseOver() {
                rowDiv.style.background = random();
            }
        for (let j = 0; j < row - 1; j++) {
            const colDiv = document.createElement('div');
                colDiv.style.background = 'white';
                colDiv.style.width = '100%';
                colDiv.style.height = '100%';
            colDiv.addEventListener("mouseover", mouseOver, false);
            main.appendChild(colDiv);
            function mouseOver() {
                colDiv.style.background = random();
            }
    }
  }
}

const but = document.querySelector('#reset');

makeGrid(5)
but.addEventListener('click', function newGrid() {
    clearGrid();
    gridDimension = prompt();
    makeGrid(gridDimension);
});

function clearGrid() {
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
}
