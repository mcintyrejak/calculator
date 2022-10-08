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

    if (type === 'num') {
        answerDisplay.innerText += value;
        currentValue = answerDisplay.innerText;

    }

    if (type === 'operator' && previousValue !== '' && currentValue !== '') { //for multiple operations
        operator = value;
        calculate(operator, previousValue, currentValue);
        previousValue = total;
        inputDisplay.innerText += ` ${answerDisplay.innerText} ${operator} `;
        answerDisplay.innerText = '';
        console.log('prev:', previousValue, 'current:', currentValue, 'total:', total)
    } else if (type === 'operator') { //for single operation
        operator = value;
        inputDisplay.innerText += ` ${currentValue} `
        answerDisplay.innerText = '';
        previousValue = currentValue;
        currentValue = '';
        inputDisplay.innerText += ` ${operator} `;
        console.log('prev:', previousValue, 'current:', currentValue, 'total:', total)
    }

    if (type === 'equals') {
        currentValue = answerDisplay.innerText;
        calculate(operator, previousValue, currentValue);
        inputDisplay.innerText += ` ${currentValue} = `
        answerDisplay.innerText = total.toFixed(12);
        console.log('prev:', previousValue, 'current:', currentValue, 'total:', total)
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
        total = parseFloat(prevValue) + parseFloat(currValue);
    }
    if (op === '-') {
        total = parseFloat(prevValue) - parseFloat(currValue);
    }
    if (op === '/') {
        total = parseFloat(prevValue) / parseFloat(currValue);
    }
    if (op === 'x') {
        total = parseFloat(prevValue) * parseFloat(currValue);
    }
}

