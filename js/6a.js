/* function mainBalance(amount){
    let balance = 0;
    balance = balance + amount
    console.log("Added:",balance)
}
mainBalance(600000) */


function Calculator(){
    function Addition(t, h){
        return t + h
    }
    console.log(Addition (77, 41))

    function Subtraction(t, h){
        return t - h
    }
    console.log(Subtraction (99, 5))

    function Multiplication(a, b){
        return a * b
    }
    console.log(Multiplication (2, 4))

    function Division(a, b){
        return a / b
    }
    console.log(Division (350, 50))
}

Calculator()



//Creating Calculator using Functions and Logic

function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

console.log(calculator(10, "+", 5));
console.log(calculator(10, "-", 5));
console.log(calculator(10, "*", 5));
console.log(calculator(70, "/", 5));
console.log(calculator(12, "/", 6));