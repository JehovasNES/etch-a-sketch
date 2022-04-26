//global since it will be used for gridGeneration and cellSize generation
const container = document.getElementById('etch');

//function for gridSize psuedo code in file live-planning.txt, working, needs to run before generateGrid so it can generate
function cellSize(container, totalCells) {
    let containerSize = container.clientWidth;
    let cellWidth = containerSize/totalCells - 2 | 0; //minus 2 is accounting for the border on both sides
    console.log(cellWidth);
    document.querySelectorAll('.griddy').forEach(function(e) {e.style.height = cellWidth + 'px';})
    document.querySelectorAll('.griddy').forEach(function(e) {e.style.width = cellWidth + 'px';})
};

//working function, leave alone, unless changes are necessary, document on commit when changes are done
function generateGrid(totalCells) {


    for(let gen = 0; gen < totalCells**2; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
        cellSize(container, totalCells);
    }
}

/* psuedo function to remove old griddy cells onclick

function removeCells() {
    access the container with a variable
    remove the cells from the grid via forEach()
    once removed generateGrid is run through onClick
}
*/


//function exponentiates by 2 to get real total(eg. 16^2)
totalCells = 16;
generateGrid(totalCells);

/* temp cut since it is causing more harm while working on cellSize

change squares to white for etching and sketching
this function will no longer work after the grid has been changes, not sure why
const hoverBlack = document.querySelectorAll('.griddy');
hoverBlack.forEach(function blackCube(hoverBlack) {
   hoverBlack.addEventListener('mouseover', function() {
       hoverBlack.style.cssText = "background-color: white;"
   })
});
*/


//works in the jankiest way, it actually just adds more grids to the container :/
const gridChangeBtn = document.querySelector('.grid-gen');
gridChangeBtn.addEventListener('click', function() {
    const userGrid = Number(window.prompt('Enter a number, 1-100', ""));
    totalCells = userGrid;
    generateGrid(totalCells);
})

//function to clear grid, changes background color
const gridClear = document.querySelector('.clear')

