const moves = document.getElementById('moves');
const container = document.querySelector(".container");
const startButton = document.getElementById('start-button');
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
let currentElement = "";
let movesCount, imagesArr = [];
const isTouchDevice = ()=> {
    try {
        document.createEvent("TouchEvent");
        return true;
    }
    catch (e) {
        return false;
    }
};

const randomNumber = () => Math.floor(Math.random()*8+1);

const getCoords = (element) => {
    const [row, col] = element.getAttribute("data-position").split("_");
    return [parseInt(row),parseInt(col)];
};

const checkAdjacent = (row1, row2, col1, col2) => {
    if (row1 == row2) {
        if (col1 == col2 || col2 == col1 + 1) {
            return true;
        }
    } else if (col1 == col2) {
        if (row2 == row1-1||row2 == row1+1) {
            return true;
        }
    }
    return false;
};

const randomImage = () => {
    while(imagesArr.length < 8) {
        let randomVal = randomNumber();
        if (!imagesArr.includes(randomVal)){
            imagesArr.push(randomVal);
        }
    }
    imagesArr.push(9);
}