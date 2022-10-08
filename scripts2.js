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
    console.log("prev:", previousValue, "current:", currentValue)


    if (type === 'operator' && previousValue !== '' && currentValue !== '') { //for multiple operations
        console.log('works');
        console.log("prev:", previousValue, "current:", currentValue);
        calculate(operator, previousValue, currentValue);
        console.log(total)
        previousValue = total;
        inputDisplay.innerText += ` ${answerDisplay.innerText} ${operator} `;
        answerDisplay.innerText = '';
        console.log("prev:", previousValue, "current:", currentValue);
    } else if (type === 'operator') { //for single operation
        operator = value;
        inputDisplay.innerText += ` ${currentValue} `
        answerDisplay.innerText = '';
        previousValue = currentValue;
        currentValue = '';
        inputDisplay.innerText += ` ${operator} `;
        console.log("prev:", previousValue, "current:", currentValue)
    }



    if (type === 'equals') {
        currentValue = answerDisplay.innerText;
        calculate(operator, previousValue, currentValue);
        inputDisplay.innerText += ` ${currentValue} = `
        answerDisplay.innerText = total;
    }


    //figure out how to operate on a string of numnbers next

}))

function calculate(op, prevValue, currValue) {
    if (op === '+') {
        total = parseInt(prevValue) + parseInt(currValue);
    }
    if (op === '-') {
        total = parseInt(prevValue) - parseInt(currValue);
    }
    if (op === '/') {
        total = parseInt(prevValue) / parseInt(currValue);
    }
    if (op === 'x') {
        total = parseInt(prevValue) * parseInt(currValue);
    }
}
