const container = document.querySelector('#container');

const div = document.createElement('div');
div.classList.add('small');
container.appendChild(div);




function grid(rows, columns) {
    
    container.setAttribute('style', `grid-template-rows: repeat(${rows}, 18px); grid-template-columns: repeat(${columns}, 18px)`);
    for (c = 1; c < rows*columns; c++) {
    const div = document.createElement('div');
    div.classList.add('small');
    container.appendChild(div);
    }
}

grid(29, 29);


