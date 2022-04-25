function generateGrid(totalCells) {

    const container = document.querySelector('#etch');

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