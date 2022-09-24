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

console.log(operate("-", 1, 2, 3, 4))

