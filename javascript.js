function generateGrid(totalCells) {

    const container = document.querySelector('#etch');

    for(let gen = 0; gen < totalCells; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
    }
}

userInput = 16;
totalCells = userInput**2;

generateGrid(totalCells);


const hoverBlack = document.querySelectorAll('.griddy');
hoverBlack.forEach(function blackCube(hoverBlack) {
    hoverBlack.addEventListener('mouseover', function() {
        hoverBlack.style.cssText = "background-color: white;"
    })
});