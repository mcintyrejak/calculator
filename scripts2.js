const answerDisplay = document.querySelector('#answer-display');
const inputDisplay = document.querySelector('#input-display');
const allButtons = document.querySelectorAll('.button');

let currentValue = '';
let previousValue = '';
let operator = '';
let total = '';
let decimal = false;

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

    if (type === 'decimal' && decimal === true) {
        console.log('you already have a decimal')
    } else if (type === 'decimal') {
        answerDisplay.innerText += value;
        decimal = true;
        console.log('you hit the decimal');
    }

    if (type === 'operator' && previousValue !== '' && currentValue !== '') { //for multiple operations
        calculate(operator, previousValue, currentValue);
        operator = value;
        previousValue = total;
        inputDisplay.innerText += ` ${answerDisplay.innerText} ${operator} `;
        answerDisplay.innerText = '';
        decimal = false;
    } else if (type === 'operator') { //for single operation
        operator = value;
        inputDisplay.innerText += ` ${currentValue} `
        answerDisplay.innerText = '';
        previousValue = currentValue;
        currentValue = '';
        inputDisplay.innerText += ` ${operator} `;
        decimal = false;
    }

    if (type === 'equals') {
        currentValue = answerDisplay.innerText;
        calculate(operator, previousValue, currentValue);
        inputDisplay.innerText += ` ${currentValue} = `
        answerDisplay.innerText = total;
        console.log('previousValue', previousValue, 'currentValue:', currentValue, 'total:', total);
    }

    if (type === 'clear') {
        inputDisplay.innerText = '';
        answerDisplay.innerText = '';
        previousValue = '';
        currentValue = '';
        operator = '';
        total = '';
        decimal = false;
    }

    if (type === 'del') {
        answerDisplay.innerText = '';
    }

    if (type === 'plusminus') {
        answerDisplay.innerText *= -1;
    }

}))

function calculate(op, prevValue, currValue) {
    if (op === '+') {
        total = Number((parseFloat(prevValue) + parseFloat(currValue)).toFixed(12));
    }
    if (op === '-') {
        total = Number((parseFloat(prevValue) - parseFloat(currValue)).toFixed(12));
    }
    if (op === '/') {
        total = Number((parseFloat(prevValue) / parseFloat(currValue)).toFixed(12));
    }
    if (op === 'x') {
        total = Number((parseFloat(prevValue) * parseFloat(currValue)).toFixed(12));
    }
}