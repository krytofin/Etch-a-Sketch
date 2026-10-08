function paintElement(element, type){
    switch (type){
        case 1:
            element.classList.add('black');
            break;
    }
}

function generateSquare(n=8){
    for (let i = 0; i < n; i++){
        let line = document.createElement('div')
        line.classList.add('line')
        for (let j = 0; j< n; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            line.appendChild(square);
            square.addEventListener('mousemove', () => {
                paintElement(square, color_type.oneColor);
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

let size = 8;
const cleanBtn = document.querySelector(`#clean`);
cleanBtn.addEventListener(`click`, ()=>{
    cleanSquare(size);
})

const container = document.querySelector(`.container`);
generateSquare();