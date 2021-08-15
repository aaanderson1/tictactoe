//html elements
const statusDiv = document.querySelector('.status');
const reserDiv = document.querySelector('.reset');
cont cellDivs = document.querySelectorAll('.game-cell');

//game constants
const xSymbol = '×';
const oSymbol = '○';




//game variables
let gameIsLive = true;
let xIsNext = true;
let xIsNext = true;
let winner = null;

//functions
const letterToSymbol = (letter) => letter == 'x' ? xSymbol : oSymbol;

//functions
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];

//check winner
if(topLeft && topLeft === topMiddle && topLeft === topRight) {
    gameIsLive = false;
    winner = topLeft;
    if (topLeft === 'x') {
statusDiv.innerHTML = `${letterToSymbol(topLeft)} has won!`;
} else {
    statusDiv.innerHTML = `<span>${letterToSymbol({topLeft)} has won!`;
    }
}
};

//event Handlers
const handleReset = (e) => {
    console.log(e);
};

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

if (classList[2] == 'x' || classList[2] == 'o') {
    return; 
}

    if (xIsNext) {

e.target.classList.add('x');
xIsNext = !xIsNext;
} else {
e.target.classList.add('o')
xIsNext = !xIsNext; 

}
};

//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
cellDiv.addEventListener('click', handleCellClick)
};

