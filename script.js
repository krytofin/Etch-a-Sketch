function paintElement(element, type){
    switch (type){
        case 1:
            element.classList.add('black');
            break;
        case 2:
            const chars = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += chars[Math.floor(Math.random() * 16)];
            }
            element.style.backgroundColor = color;
            break;
    }
}

function generateSquare(n=16){
    for (let i = 0; i < n; i++){
        let line = document.createElement('div')
        line.classList.add('line')
        for (let j = 0; j< n; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            line.appendChild(square);
            square.addEventListener('mouseenter', () => {
                paintElement(square, currentType);
            })
        }
        container.appendChild(line);
    }
}

function cleanSquare(n=8){
    const lines = document.querySelectorAll(`.line`);
    lines.forEach((item)=>{
        item.remove()
    })
    generateSquare(n)
}

const color_type = Object.freeze({
    "oneColor": 1,
    "randomColor": 2,
});
let currentType = color_type.oneColor;

let size = 8;
const cleanBtn = document.querySelector(`#clean`);
const resizeBtn = document.querySelector(`#resize`);
const randomizeBtn = document.querySelector(`#randomize`);

randomizeBtn.addEventListener('click', ()=>{
    if (currentType == color_type.oneColor){
        currentType = color_type.randomColor;
    }
    else {
        currentType = color_type.oneColor
    }
})

cleanBtn.addEventListener(`click`, ()=>{
    cleanSquare(size);
})

resizeBtn.addEventListener(`click`, ()=>{
    let newSize = +prompt("Enter new size: 1-100");
    if (newSize <= 100 && newSize > 0){
        size = newSize;
        cleanSquare(size);
    }
})

const container = document.querySelector(`.container`);
generateSquare();