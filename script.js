const main = document.querySelector('main');


function makeGrid (row) {
main.style.gridTemplateColumns = `repeat(${row}, 1fr)`;

    for (let i = 0; i < row; i++) {
        const rowDiv = document.createElement('div');
            rowDiv.style.background = 'grey';
            rowDiv.style.width = '100%';
            rowDiv.style.height = '100%';
        main.appendChild(rowDiv);
    
    for (let j = 0; j < row - 1; j++) {
        const colDiv = document.createElement('div');
            colDiv.style.background = 'black';
            colDiv.style.width = '100%';
            colDiv.style.height = '100%';
        main.appendChild(colDiv);
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