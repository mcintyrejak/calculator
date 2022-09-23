let total = 0;
let test = [1, 2, 3];

function add(...nums) {
    total += nums.reduce(
        (previousNum, currentNum) => previousNum + currentNum,
        total
    );
    return total
};

function subtract(num) {
    total -= num;
    return total;
}

function multiply(num) {
    total *= num;
    return total;
}

function divide(num) {
    total /= num;
    return total;
}

// function operate(operator, num1, num2) {

//     operator(num1, num2)
// }

