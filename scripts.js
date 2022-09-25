let total = 0;

function add(...nums) {
    total = nums.reduce(
        (previousNum, currentNum) => previousNum + currentNum,
        total
    );
    return total
};

function subtract(...nums) {
    total = nums.reduce(
        (previousNum, currentNum) => previousNum - currentNum,
        total
    );
    return total
}

function multiply(...nums) {
    total = nums.reduce(
        (previousNum, currentNum) => previousNum * currentNum,
        total
    );
    return total
}

function divide(...nums) {
    total = nums.reduce(
        (previousNum, currentNum) => previousNum / currentNum,
        total
    );
    return total
}

// Don't forget to make it throw an error if you try to divide by zero.
function operate(operator, ...nums) {
    switch (operator) {
        case "+":
            return add(...nums);
        case "-":
            return subtract(...nums);
        case "*":
            return multiply(...nums);
        case "/":
            return divide(...nums);
    }
};


let operator = "";
const answerDisplay = document.querySelector('#answer-display');
let inputDisplay = document.querySelector('#input-display');

//attach a variable to each button clicked 
let cBtn = document.querySelector('.c');
cBtn.addEventListener('click', () => {
    total = 0;
    answerDisplay.textContent = "";
    inputDisplay.textContent = "";
});

let plusMinusBtn = document.querySelector('.plus-minus');
plusMinusBtn.addEventListener('click', () => {
    console.log("You clicked +/- but idk what to do with that yet.")
});

let divideBtn = document.querySelector('.divide-btn');
divideBtn.addEventListener('click', () => {
    operator = "/";
    inputDisplay.textContent += "/";
});

let multiplyBtn = document.querySelector('.multiply-btn');
multiplyBtn.addEventListener('click', () => {
    operator = "*";
    inputDisplay.textContent += "*";
});

let subtractBtn = document.querySelector('.subtract-btn');
subtractBtn.addEventListener('click', () => {
    operator = "-";
    inputDisplay.textContent += "-";
});

let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    operator = "+";
    inputDisplay.textContent += "+";
});

let equalsBtn = document.querySelector('.equals-btn');
equalsBtn.addEventListener('click', () => {
    answerDisplay.textContent = total;
});

let sevenBtn = document.querySelector('.seven-btn');
sevenBtn.addEventListener('click', () => {
    inputDisplay.textContent += 7;
});

let eightBtn = document.querySelector('.eight-btn');
eightBtn.addEventListener('click', () => {
    inputDisplay.textContent += 8;
});

let nineBtn = document.querySelector('.nine-btn');
nineBtn.addEventListener('click', () => {
    inputDisplay.textContent += 9;
});

let fourBtn = document.querySelector('.four-btn');
fourBtn.addEventListener('click', () => {
    inputDisplay.textContent += 4;
});

let fiveBtn = document.querySelector('.five-btn');
fiveBtn.addEventListener('click', () => {
    inputDisplay.textContent += 5;
});

let sixBtn = document.querySelector('.six-btn');
sixBtn.addEventListener('click', () => {
    inputDisplay.textContent += 6;
});

let oneBtn = document.querySelector('.one-btn');
oneBtn.addEventListener('click', () => {
    inputDisplay.textContent += 1;
});

let twoBtn = document.querySelector('.two-btn');
twoBtn.addEventListener('click', () => {
    inputDisplay.textContent += 2;
});

let threeBtn = document.querySelector('.three-btn');
threeBtn.addEventListener('click', () => {
    inputDisplay.textContent += 3;
});

let zeroBtn = document.querySelector('.zero-btn');
zeroBtn.addEventListener('click', () => {
    inputDisplay.textContent += 0;
});

let decimalBtn = document.querySelector('.decimal-btn');
decimalBtn.addEventListener('click', () => {
    inputDisplay.textContent += ".";
});

let delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click', () => {
    console.log("You clicked delete but idk what to do with that yet.")
});