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

const gridChangeBtn = document.querySelector('.grid-gen');
gridChangeBtn.addEventListener('click', function() {
    const userGrid = Number(window.prompt('Enter a number, 1-100', ""));
    totalCells = userGrid;
    generateGrid(totalCells);
})

//clear screen function
function clearScreen() {
    hoverBlack.forEach(function blackCube(hoverBlack) {
        hoverBlack.classList.remove('color-white');
    })
}

//clear screen button
const gridClearBtn = document.querySelector('.clear');
gridClearBtn.addEventListener('click', () => clearScreen());

function removeGrid() {
    const remove = document.querySelector("#etch");
    while (remove.firstChild) {
        remove.removeChild(container.lastChild); 
    }
}

function generateGrid(totalCells) {
    removeGrid();
    for(let gen = 0; gen < totalCells**2; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
        cellSize(container, totalCells);
    }
}

//function exponentiates by 2 to get real total(eg. 16^2)
totalCells = 16;
generateGrid(totalCells);

//add white class on hover
const hoverBlack = document.querySelectorAll('.griddy');
function onHover() {
hoverBlack.forEach(function blackCube(hoverBlack) {
   hoverBlack.addEventListener('mouseover', function() {
    hoverBlack.classList.add('color-white');
    onHover();
   })
});
};

//works in the jankiest way, it actually just adds more grids to the container :/
