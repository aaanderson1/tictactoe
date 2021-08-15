//html elements
const statusDiv = document.querySelector('.status');
const reserDiv = document.querySelector('.reset');
cont cellDivs = document.querySelectorAll('.game-cell');


//game variables
let gameIsLove = true;
let xIsNext = true;

//functions
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const bottomRight = cellDivs[8].classList[1];

}






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

