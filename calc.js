/*
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    
} */

const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a,b) => a / b
};

const operation = 'add';
const result = operations[operation](5, 3);
console.log(result); // Output: 8

function write(calc_text, calc_char) {
    
}