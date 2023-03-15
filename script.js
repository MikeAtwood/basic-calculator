let operator = '';
let previousValue = '';
let currentValue = '';

const numberBtn = document.querySelectorAll(".number")
const clearBtn = document.querySelector(".clear")
const equalBtn = document.querySelector(".equal")
const decimalBtn = document.querySelector(".decimal")
const operatorBtn = document.querySelectorAll(".operator")
const previousScreen = document.querySelector(".previous")
const currentScreen = document.querySelector(".current")

// Event Handlers
numberBtn.forEach((number) => number.addEventListener("click", function(e) {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

operatorBtn.forEach((op) => op.addEventListener("click", function(e) {
    handleOperator(e.target.textContent)
}))


function handleNumber(num) {
    if(currentValue.length <= 11) {
    currentValue += num;
    }
}

function handleOperator(op) {
    console.log(op)
}


const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

const operate = () => {

}

