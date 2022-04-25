function generateGrid(totalCells) {

    const container = document.querySelector('#etch');

    for(let gen = 0; gen < totalCells**2; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
    }
}

totalCells = 16;

generateGrid(totalCells);


//change squares to white for etching and sketching
const hoverBlack = document.querySelectorAll('.griddy');
hoverBlack.forEach(function blackCube(hoverBlack) {
    hoverBlack.addEventListener('mouseover', function() {
        hoverBlack.style.cssText = "background-color: white;"
    })
});
