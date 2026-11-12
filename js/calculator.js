const display = document.querySelector(".display");
const numberBtns = document.querySelectorAll(".number-btns button");
const operands = document.querySelectorAll(".operands button");

let firstNumber = "";

let secondNumber = "";

let operator = "";

numberBtns.forEach(function(button) {
    button.addEventListener("click", function() {
        display.textContent += button.textContent;
    });
});

operands.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.textContent;

        if (value == "=") {
            secondNumber = display.textContent;

            if (operator == "+") {
                display.textContent = Number(firstNumber) + Number(secondNumber);
            } else if (operator == "-") {
                display.textContent = Number(firstNumber) - Number(secondNumber);
            } else if (operator == "*") {
                display.textContent = Number(firstNumber) * Number(secondNumber);
            } else if (operator == "/") {
                if (Number(secondNumber) == 0) {
                    display.textContent = "Cannot divide by zero";
                } else {
                    display.textContent = Number(firstNumber) / Number(secondNumber);
                }
            }

            firstNumber = display.textContent;
            secondNumber = "";
            operator = "";

        } else {
            firstNumber = display.textContent;
            operator = value;
            display.textContent = "";
        }


    });
});