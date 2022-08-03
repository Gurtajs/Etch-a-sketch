const container = document.querySelector('#container');
const div = document.createElement('div');


const getRandomNumber = (maxNum) => {
     return Math.floor(Math.random()*maxNum)
 };

const getRandomColour = () => {
     const h = getRandomNumber(360);
     const s = getRandomNumber(100);
     const l = getRandomNumber(100);

     return `hsl(${h}deg, ${s}%, ${l}%)`;
 };

// const ranCol = () => {
//     div.addEventListener('mouseover', () => {
//         div.style.backgroundColor = getRandomColour();
//         })
// }

const button = document.querySelector('.button')
const button2 = document.querySelector('.button2')

 function grid(rows, columns) {
    for (let c = 0; c < rows*columns; c++) {
        const div = document.createElement('div');
        div.classList.add('small');
        container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`
        container.style.gridTemplateRows = `repeat(${columns}, 1fr)`
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = getRandomColour();
    })}
}
grid(16, 16);

function reset() {
    const divs = container.querySelectorAll('.small')
    divs.forEach(div => div.remove())
}


function newGrid() {
    button.addEventListener('click', () => {
    reset();
    user1 = prompt("How many rows do you want?");
    user2 = prompt("How many columns do you want?");
    if (user1 <= 100 && user2 <= 100) {
        grid(user1, user2);
    }
    else {
        alert('Number of rows and columns needs to be less than 100')
        grid(16, 16);
    }
    
})
}
newGrid();

