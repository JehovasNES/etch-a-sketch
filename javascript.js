function generateGrid(num) {

    const container = document.querySelector('#etch');

    for(let gen = num; gen < 256; gen++) {
        let grid = document.createElement('div')
        grid.classList.add('griddy');
        container.appendChild(grid);
    }
}

num = 0;

generateGrid(num);