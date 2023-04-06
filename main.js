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
    
}