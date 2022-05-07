//selectors
const container = document.getElementById('etch');
const hover = document.querySelectorAll('.griddy');
const gridChangeBtn = document.querySelector('.grid-gen');
const gridClearBtn = document.querySelector('.clear');

//functions

function generateGrid(totalCells = 16) {
    removeGrid();
    for(let gen = 0; gen < totalCells**2; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
        cellSize(container, totalCells);
    }
}


function onHover() {
    hover.forEach(function blackCube(hover) {
        hover.addEventListener('mouseover', function() {
        hover.classList.add('color-white');
   })
});
};

gridChangeBtn.addEventListener('click', function() {
    const userGrid = Number(window.prompt('Enter a number, 1-100', ""));
    totalCells = userGrid;
    generateGrid(totalCells);
})

function clearScreen() {
    hoverBlack.forEach(function blackCube(hoverBlack) {
        hoverBlack.classList.remove('color-white');
    })
    
}

function removeGrid() {
    const remove = document.querySelector("#etch");
    while (remove.firstChild) {
        remove.removeChild(container.lastChild); 
    }
}

function cellSize(container, totalCells) {
    let containerSize = container.clientWidth;
    let cellWidth = containerSize/totalCells - 2 | 0; //minus 2 is accounting for the border on both sides
    console.log(cellWidth);
    document.querySelectorAll('.griddy').forEach(function(e) {e.style.height = cellWidth + 'px';})
    document.querySelectorAll('.griddy').forEach(function(e) {e.style.width = cellWidth + 'px';})
};


//run on start
generateGrid();
onHover();