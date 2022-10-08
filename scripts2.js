const answerDisplay = document.querySelector('#answer-display');
const inputDisplay = document.querySelector('#input-display');
const allButtons = document.querySelectorAll('.button');

let currentValue = '';
let previousValue = '';
let operator = '';
let total = '';

allButtons.forEach((button) => button.addEventListener('click', function (e) {
    let value = button.innerText;
    let type = button.dataset.type;

    //prevents the input display from overflowing
    if (inputDisplay.innerText.length > 35) {
        inputDisplay.innerText = `${total} ${operator}`
    }

    if (type === 'num') {
        answerDisplay.innerText += value;
        currentValue = answerDisplay.innerText;
    }

    if (type === 'operator' && previousValue !== '' && currentValue !== '') { //for multiple operations
        calculate(operator, previousValue, currentValue);
        operator = value;
        previousValue = total;
        inputDisplay.innerText += ` ${answerDisplay.innerText} ${operator} `;
        answerDisplay.innerText = '';
    } else if (type === 'operator') { //for single operation
        operator = value;
        inputDisplay.innerText += ` ${currentValue} `
        answerDisplay.innerText = '';
        previousValue = currentValue;
        currentValue = '';
        inputDisplay.innerText += ` ${operator} `;
    }

    if (type === 'equals') {
        currentValue = answerDisplay.innerText;
        calculate(operator, previousValue, currentValue);
        inputDisplay.innerText += ` ${currentValue} = `
        answerDisplay.innerText = total;
    }

    if (type === 'clear') {
        inputDisplay.innerText = '';
        answerDisplay.innerText = '';
        previousValue = '';
        currentValue = '';
        operator = '';
        total = '';
    }

    if (type === 'del') {
        answerDisplay.innerText = '';
    }

}))

function calculate(op, prevValue, currValue) {
    if (op === '+') {
        total = Number((parseInt(prevValue) + parseInt(currValue)).toFixed(12));
    }
    if (op === '-') {
        total = Number((parseInt(prevValue) - parseInt(currValue)).toFixed(12));
    }
    if (op === '/') {
        total = Number((parseInt(prevValue) / parseInt(currValue)).toFixed(12));
    }
    if (op === 'x') {
        total = Number((parseInt(prevValue) * parseInt(currValue)).toFixed(12));
    }
}
