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

const randomImages = () => {
    while(imagesArr.length < 8) {
        let randomVal = randomNumber();
        if (!imagesArr.includes(randomVal)){
            imagesArr.push(randomVal);
        }
    }
    imagesArr.push(9);
};

const gridGenerator = () => {
    let count = 0;
    for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
            let div = document.createElement('div');
            div.setAttribute('data-position', `${i}_${i}`);
            div.addEventListener('click', selecImage);
            div.classList.add('image-container');
            div.innerHTML = `<img src="image_part_00${imagesArr[count]}.png" class="image ${imageArr[count] == 9 ? "target" : "" } " data index="${imagesArr[count]}" />`;
            count +=1;
            container.appendChild(div)
        }
    }
};

