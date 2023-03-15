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
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue;
}))

clearBtn.addEventListener("click", function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
})

equalBtn.addEventListener("click", function() {
    calculate()
})


function handleNumber(num) {
    if(currentValue.length <= 11) {
    currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if(operator === "+") {
        previousValue += currentValue
    } else if(operator === "-") {
        previousValue -= currentValue
    } else if(operator === "/") {
        previousValue /= currentValue
    } else {
        previousValue *= currentValue
    }
    console.log(previousValue)
}

