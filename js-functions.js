function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomColor(){
    let r = getRandomInt(1,256);
    let g = getRandomInt(1,256);
    let b = getRandomInt(1,256);
    return `rgb(${r},${g},${b})`;
}