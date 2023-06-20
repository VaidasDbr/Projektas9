console.clear();
let formDOM = document.querySelector("form");
let numberDOM = formDOM.querySelector("div");
let b1DOM = formDOM.querySelector("button");
let b2DOM = formDOM.querySelector("button:nth-child(3)");
let b3DOM = formDOM.querySelector("button:nth-child(4)");
let b4DOM = formDOM.querySelector("button:nth-child(5)");
let b5DOM = formDOM.querySelector("button:nth-child(6)");
let b6DOM = formDOM.querySelector("button:nth-child(7)");
let b7DOM = formDOM.querySelector("button:nth-child(8)");
let b8DOM = formDOM.querySelector("button:nth-child(9)");
let b9DOM = formDOM.querySelector("button:nth-child(10)");
let b10DOM = formDOM.querySelector("button:nth-child(11)");
let b11DOM = formDOM.querySelector("button:nth-child(12)");
let b12DOM = formDOM.querySelector("button:nth-child(13)");
let b13DOM = formDOM.querySelector("button:nth-child(14)");
let b14DOM = formDOM.querySelector("button:nth-child(15)");
let b15DOM = formDOM.querySelector("button:nth-child(16)");
let b16DOM = formDOM.querySelector("button:nth-child(17)");
let b17DOM = formDOM.querySelector("button:nth-child(18)");

let counter = 0;
let counterP = 0;
let counterM = 0;
let counterDG = 0;
let counterDL = 0;
let counterS = 0;
let counterB = 0;
let counterC = 0;

b1DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 1;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b2DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 2;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b3DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 3;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b4DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counterDL = counter/10;
    counter = 0;
});
b5DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 4;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b6DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 5;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b7DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 6;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b8DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counterDG = counter/10;
    counter = 0;
});
b9DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 7;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b10DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 8;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b11DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 9;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b12DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counterM = counter/10;
    counter = 0;
});
b13DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter = counter/10;
    counterB = counter;
    counterC = ""+counterB;
    counterB = counterC.length-1;
    counterB = counterC[counterB];
    counter = (counter - counterB)/10;
    numberDOM.textContent = counter;
    counter = counter*10;
});
b14DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counter < 9999999999999) {
    counter += 0;
    numberDOM.textContent = counter;
    counter *= 10;}
});
b15DOM.addEventListener('click', (event) => {
    event.preventDefault();
    if (counterP !== 0) {
        counterS = counterP + counter/10;
    }
    if (counterM !== 0) {
        counterS = counterM - counter/10;
    }
    if (counterDG !== 0) {
        counterS = counterDG * counter/10;
    }
    if (counterDL !== 0) {
        counterS = counterDL / (counter/10);

    }
    if (counterS > 9999999999999) {
        counterS = 0;
    }
    numberDOM.textContent = counterS;
    counterP = 0;
    counterM = 0;
    counterDG = 0;
    counterDL = 0;
    counter = counterS;
    counter = counter*10;
    counterS = 0;
});
b16DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counterP = counter/10;
    counter = 0;
});
b17DOM.addEventListener('click', (event) => {
    event.preventDefault();
    counter = 0;
    numberDOM.textContent = counter;
});