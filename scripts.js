let prevValue = '';
let currentValue = '';
let total = 0;
let operator = '';

const numButtons = document.querySelectorAll('.num-btn');
const inputDisplay = document.querySelector('#input-display');
const answerDisplay = document.querySelector('#answer-display');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn');
const clearBtn = document.querySelector('.c-btn');
const deleteBtn = document.querySelector('.del-btn');
const plusMinusBtn = document.querySelector('.plusminus-btn')

answerDisplay.innerText = '0';

numButtons.forEach((numBtn) => numBtn.addEventListener('click', function (e) {
    handleNumber(e.target.textContent);
    answerDisplay.textContent = currentValue;
    console.log("prevValue:", prevValue, "currentValue:", currentValue, "total:", total, "operator:", operator)
}));

function handleNumber(num) {
    if (currentValue.length <= 12) { //don't let the user add more numbers after a certain point
        currentValue += num;
    }
}

operatorBtns.forEach((operatorBtn) => operatorBtn.addEventListener('click', function (e) {
    handleOperator(e.target.textContent);
    // inputDisplay.textContent = answerDisplay.innerText
    // inputDisplay.textContent += ` ${operator} `;
    // answerDisplay.textContent = '';
}));

function handleOperator(op) {
    operator = op;
    prevValue = currentValue;
    currentValue = '';
}

function divide(prevValue, currentValue) {
    if (currentValue === '0') {
        answerDisplay.textContent = "ERROR!"
    } else {
        total = prevValue / currentValue;
        // answerDisplay.textContent = total;
    }
}

function multiply(prevValue, currentValue) {
    total = Number(prevValue) * Number(currentValue);
    return total;
    // answerDisplay.textContent = total;
}

function subtract(prevValue, currentValue) {
    total = prevValue - currentValue;
    return total;
    // answerDisplay.textContent = total;
}

function add(prevValue, currentValue) {
    total = Number(prevValue) + Number(currentValue);
    return total;
    // answerDisplay.textContent = total;
}

function operate(operator, prevValue, currentValue) {
    switch (operator) {
        case "+":
            return add(prevValue, currentValue);
        case "-":
            return subtract(prevValue, currentValue);
        case "x":
            return multiply(prevValue, currentValue);
        case "/":
            return divide(prevValue, currentValue);
    }

}

equalsBtn.addEventListener('click', function () {
    operate(operator, prevValue, currentValue);
    answerDisplay.textContent = total;
});

clearBtn.addEventListener('click', function () {
    inputDisplay.innerText = '';
    answerDisplay.innerText = '0';
    prevValue = '';
    currentValue = '';
    total = '';
})

deleteBtn.addEventListener('click', function () {
    answerDisplay.innerText = '0';
    currentValue = '';
})

plusMinusBtn.addEventListener('click', function () {
    currentValue = currentValue * (-1);
    answerDisplay.innerText = currentValue;
})