
const container = document.querySelector(`.container`);

for (let i = 0; i < 8; i++){
    let line = document.createElement('div')
    line.classList.add('line')
    for (let j = 0; j< 8; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        line.appendChild(square);
    }
    container.appendChild(line);
}