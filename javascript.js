const container = document.querySelector('#etch');


//working function, leave alone, unless changes are necessary, document on commit when changes are done
function generateGrid(totalCells) {

    for(let gen = 0; gen < totalCells**2; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
    }
}


//function exponentiates by 2 to get real total(eg. 16^2)
totalCells = 16;
generateGrid(totalCells);


//change squares to white for etching and sketching
//this function will no longer work after the grid has been changes, not sure why
const hoverBlack = document.querySelectorAll('.griddy');
hoverBlack.forEach(function blackCube(hoverBlack) {
    hoverBlack.addEventListener('mouseover', function() {
        hoverBlack.style.cssText = "background-color: white;"
    })
});

//works in the jankiest way, it actually just adds more grids to the container :/
const gridChangeBtn = document.querySelector('.grid-gen');
gridChangeBtn.addEventListener('click', function() {
    const userGrid = Number(window.prompt('Enter a number, 1-100', ""));
    totalCells = userGrid;
    generateGrid(totalCells);
})

//function to clear grid, changes background color
const gridClear = document.querySelector('.clear')

//function for gridSize psuedo code in file live-planning.txt
//function cellSize()