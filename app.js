//html elements
const statusDiv = document.querySelector('.status');
const reserDiv = document.querySelector('.reset');
cont cellDivs = document.querySelectorAll('.game-cell');


//game variables
let gameIsLove = true;
let xIsNext = true;

//event Handlers
const handleReset = (e) => {
    console.log(e);
};

//event listeners
resetDiv.addEventListener('click', handleReset);


