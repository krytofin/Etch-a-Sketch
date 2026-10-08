let color_type = Object.freeze({
    "oneColor": 1,
    "randomColor": 2,
});

function paintElement(element, type){
    switch (type){
        case 1:
            element.classList.add('black');
            break;
    }
}

const container = document.querySelector(`.container`);

for (let i = 0; i < 8; i++){
    let line = document.createElement('div')
    line.classList.add('line')
    for (let j = 0; j< 8; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        line.appendChild(square);
        square.addEventListener('mousemove', () => {
            paintElement(square, color_type.oneColor);
        })
    }
    container.appendChild(line);
}