"use strict"; //it ensures that some mistakes may not be tolerated and will throw errors instead of failing silently.

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("Button clicked");
// });

console.log("Hello World");

//VARIABLE: This is a named container/refernce used to store a value. It can be changed later in the program. It is declared using the keyword "let".
let name12 = "Gabriel";
console.log('name ${name}');
console.log(`Welcome ${name}`); 

//LET, CONST AND VAR: These are keywords used to declare variables in JavaScript. "let" is used for variables that can be reassigned, "const" is used for variables that cannot be reassigned, and "var" is the older way of declaring variables that has function scope instead of block scope. 
//Function scope vs Block scope: Function scope means that a variable declared inside a function is only accessible within that function, while block scope means that a variable declared inside a block (e.g. an if statement or a loop) is only accessible within that block.

//PRIMITIVE AND NON-PRIMITIVE DATA-TYPES: Primitive data types are basic types of data that are not objects and have no methods. They include string, number, boolean, null, undefined, and symbol. Non-primitive data types are objects and can have methods. They include arrays, functions, and objects.




"use strict"; //it ensures that some mistakes may not be tolerated and will throw errors instead of failing silently.

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("Button clicked");
// });

console.log("Hello World");

//VARIABLE: This is a named container/refernce used to store a value. It can be changed later in the program. It is declared using the keyword "let".
let name = "Gabriel";
console.log("name ${name}");
console.log(`Welcome ${name}`);

//LET, CONST AND VAR: These are keywords used to declare variables in JavaScript. "let" is used for variables that can be reassigned, "const" is used for variables that cannot be reassigned, and "var" is the older way of declaring variables that has function scope instead of block scope.
//Function scope vs Block scope: Function scope means that a variable declared inside a function is only accessible within that function, while block scope means that a variable declared inside a block (e.g. an if statement or a loop) is only accessible within that block.

//PRIMITIVE AND NON-PRIMITIVE DATA-TYPES: Primitive data types are basic types of data that are not objects and have no methods. They include string, number, boolean, null, undefined, and symbol. Non-primitive data types are objects and can have methods. They include arrays, functions, and objects. They are not objects and no methods can be called on them. They are immutable, meaning their values cannot be changed once they are created. Non-primitive data types are mutable, meaning their values can be changed after they are created.

let age = 54;
age = 33; //This is an example of reassigning a variable declared with "let". The value of "age" is now 33 instead of 54.
console.log(age);

const country = "Nigeria";
// country = "Ghana"; //This will throw an error because "country" is declared with "const" and cannot be reassigned.
console.log(country);

var name1 = "John"; //This is an example of declaring a variable with "var". It has function scope and can be reassigned. Var is no longer in use due to its function scope and hoisting issues. It is recommended to use "let" or "const" instead.

//DATA TYPES: These are different types of values that can be stored in variables. They include primitive data types (string, number, boolean, null, undefined, symbol) and non-primitive data types (arrays, functions, objects).
//STRING: This is a primitive data type that represents a sequence of characters. It is declared using single quotes, double quotes, or backticks. Strings can be concatenated using the + operator or template literals using backticks and ${} syntax.
let firstName = "Gabriel";
let lastName = "Oluwaseun";
let fullName = firstName + " " + lastName;
console.log(fullName);

const a = 2;
console.log(a + a + "4"); //This is an example of adding two numbers together. The result is 44.
console.log("Obi " + "Wan " + "Kenobi"); //This is an example of concatenating three strings together.

//NUMBERS: This is a primitive data type that represents numeric values. It can be an integer or a floating-point number. Numbers can be used in mathematical operations such as addition, subtraction, multiplication, and division.

const age2 = 25;
const price = 1500;
const score = 85.5;

const add = price + score; //This is an example of adding two numbers together. The result is 1585.5.
const subtract = price - score; //This is an example of subtracting two numbers together. The result is 1414.5.
const multiply = price * score; //This is an example of multiplying two numbers together. The result is 128250.
const divide = price / score; //This is an example of dividing two numbers together. The result is 17.543859649122806.

console.log(add); //This is an example of adding two numbers together. The result is 1585.5.
console.log(subtract); //This is an example of subtracting two numbers together. The result is 1414.5.
console.log(multiply); //This is an example of multiplying two numbers together. The result is 128250.
console.log(divide); //This is an example of dividing two numbers together. The result is 17.543859649122806.

//BOOLEANS: This is a primitive data type that represents a logical value of true or false. It is often used in conditional statements and loops to control the flow of a program.

const isLoggedIn = true;
const isAdmin = false;

//UNDEFINED: This is a primitive data type that represents a variable that has been declared but has not been assigned a value. It is often used to indicate the absence of a value or to initialize a variable before assigning it a value.

let userName4;
console.log(userName4); //This will log "undefined" to the console because "userName4" has not been assigned a value yet. we use this to check if a variable has been assigned a value or not. If it is undefined, we can assign it a value later in the program.

//NULL: This is a primitive data type that represents the intentional absence of any object value. It is often used to indicate that a variable should not have a value or to reset a variable to an empty state.

let userAge1 = null;
console.log(userAge1); //This will log "null" to the console because "userAge1" has been assigned a value of null. we use this to indicate that a variable should not have a value or to reset a variable to an empty state.

const userName2 = "Gabriel";
const userAge2 = 25;
const isLoggedIn2 = true;

console.log(`User Name: ${userName2}, User Age: ${userAge2}, Is Logged In: ${isLoggedIn2}`); //This will log "User Name: Gabriel, User Age: 25, Is Logged In: true" to the console. We use this to display the values of multiple variables in a single string using template literals and ${} syntax.

console.log(
  "userName:" +
    userName2 +
    ", userAge:" +
    userAge2 +
    ", isLoggedIn:" +
    isLoggedIn2,
); //This will log "userName:Gabriel, userAge:25, isLoggedIn:true" to the console. We use this to display the values of multiple variables in a single string using concatenation and the + operator.


//SYMBOL: This is a primitive data type that represents a unique identifier. It is often used to create unique keys for objects or to create private properties in classes.

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1)

//NAMING CONVENTIONS: These are rules and guidelines for naming variables, functions, and other identifiers in JavaScript. They include using camelCase for variable and function names, using PascalCase for class names, and avoiding reserved keywords and special characters. Examples of naming conventions include using descriptive names that indicate the purpose of the variable or function, using singular nouns for variables that represent a single value, and using plural nouns for variables that represent a collection of values.
let userFirstName = "Gabriel"; //This is an example of using camelCase for a variable name. It indicates that the variable represents the first name of a user.
let UserLastName = "Oluwaseun"; //This is an example of using PascalCase for a variable name. It indicates that the variable represents the last name of a user.
// Good
let userEmail = "alex@example.com";
let totalCartItems = 12;
const highScores = [98, 85, 72]; // Plural form for arrays

// Bad
let user_email = "alex@example.com"; // snake_case
let totalitemslist = 12; // Unreadable lowercase
const highScoreArray = [98, 85, 72]; // Avoid adding data type names

//In naming conventions, there are things you shouldn't do, such as using reserved keywords as variable names, starting variable names with numbers, using special characters in variable names, and using spaces in variable names. Examples of things you shouldn't do include using "var" as a variable name, using "1stName" as a variable name, using "user-name" as a variable name, and using "user name" as a variable name.


//TYPEOF OPERATOR: This is an operator that returns a string indicating the type of a variable or value. It can be used to check the data type of a variable or value before performing operations on it. Examples of using the typeof operator include checking if a variable is a string, number, boolean, object, function, undefined, or symbol.

const userName5 = "4";
const userAge5 = 25;
const isLoggedIn5 = true;
let time;
const time2 = null;
const symbol3 = Symbol("id");

console.log(typeof userName5); //This will log "string" to the console because "userName5" is a string. We use this to check the data type of a variable or value before performing operations on it.
console.log(typeof userAge5); //This will log "number" to the console because "userAge5" is a number.
console.log(typeof isLoggedIn5); //This will log "boolean" to the console because "isLoggedIn5" is a boolean.
console.log(typeof time); //This will log "undefined" to the console because "time" has not been assigned a value yet.
console.log(typeof time2); //This will log "object" to the console because "time2" is null. We use this to check the data type of a variable or value before performing operations on it.
console.log(typeof symbol3); //This will log "symbol" to the console because "symbol3" is a symbol. We use this to check the data type of a variable or value before performing operations on it.

//ARITHEMTIC OPERATORS: These are operators that perform mathematical operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), and decrement (--). Examples of using arithmetic operators include adding two numbers together, subtracting one number from another, multiplying two numbers together, dividing one number by another, finding the remainder of a division operation, incrementing a number by 1, and decrementing a number by 1.

const price1 = 100;
const deliveryFee = 10000;
const totalPrice = price1 * deliveryFee;
console.log(totalPrice);

const balance = 100000;
const withdrawal = 3000;
const remainingBalance = balance - withdrawal;
console.log(remainingBalance);

console.log(10 % 3); //This will log "1" to the console because 10 divided by 3 has a remainder of 1. We use this to find the remainder of a division operation.

console.log(2 ** 3); //This will log "8" to the console because 2 raised to the power of 3 is 8. We use this to perform exponentiation operations.

let count = 0;
count++; //This is an example of incrementing a variable by 1. The value of "count" is now 1 instead of 0.
console.log(count);

let count2 = 5;
count2--; //This is an example of decrementing a variable by 1. The value of "count2" is now 4 instead of 5.
console.log(count2);


//COMPARISON OPERATORS: These are operators that compare two values and return a boolean value (true or false) based on the comparison. They include equal to (==), not equal to (!=), strict equal to (===), strict not equal to (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). Examples of using comparison operators include checking if two values are equal, checking if one value is greater than another, and checking if one value is less than or equal to another.

console.log(10 > 5); //This will log "true" to the console because 10 is greater than 5. We use this to check if one value is greater than another.
console.log(10 < 5); //This will log "false" to the console because 10 is not less than 5. We use this to check if one value is less than another.

console.log (10 >= 10); //This will log "true" to the console because 10 is equal to 10. We use this to check if one value is greater than or equal to another.
console.log (10 <= 10); //This will log "true" to the console because 10 is equal to 10. We use this to check if one value is less than or equal to another.

//== vs ===: The double equals (==) operator checks for equality of values, but it does not check for equality of data types. It performs type coercion, meaning it converts one or both values to a common type before making the comparison. The triple equals (===) operator checks for equality of both values and data types, meaning it does not perform type coercion. It is generally recommended to use the triple equals (===) operator to avoid unexpected results due to type coercion.

console.log(5 == "5"); //This will log "true" to the console because the double equals (==) operator performs type coercion and converts the string "5" to a number before making the comparison. We use this to check for equality of values without checking for equality of data types.
console.log(5 === "5"); //This will log "false" to the console because the triple equals (===) operator checks for equality of both values and data types, and 5 is a number while "5" is a string. We use this to check for equality of values and data types.

console.log(10 != 5); //This will log "true" to the console because 10 is not equal to 5. We use this to check if two values are not equal.
console.log(10 !== "10"); //This will log "true" to the console because the triple equals (===) operator checks for equality of both values and data types, and 10 is a number while "10" is a string. We use this to check if two values are not equal in both value and data type.

//LOGICAL OPERATORS: These are operators that combine or negate boolean values and return a boolean value based on the logical operation. They include AND (&&), OR (||), and NOT (!). Examples of using logical operators include checking if two conditions are true, checking if at least one condition is true, and negating a boolean value.

//AND &&: This operator returns true if both operands are true, and false otherwise. It is often used to check if multiple conditions are true before executing a block of code.
const age6 = 23;
const hasID = true; 
console.log (age6 >= 18 && hasID); //This will log "true" to the console because both conditions are true. We use this to check if multiple conditions are true before executing a block of code.

const username = "admin";
const password = "12345";
if(username === "admin" && password === "12345") {
  console.log("Access granted"); //This will log "Access granted" to the console because both conditions are true. We use this to check if multiple conditions are true before executing a block of code.
} else{
    console.log("Access denied"); //This will log "Access denied" to the console because one or both conditions are false. We use this to check if multiple conditions are true before executing a block of code.
}

//OR ||: This operator returns true if at least one of the operands is true, and false otherwise. It is often used to check if at least one condition is true before executing a block of code.
const isWeekend = true;
const isHoliday = false;
console.log(isWeekend || isHoliday); //This will log "true" to the console because at least one of the conditions is true. We use this to check if at least one condition is true before executing a block of code.

const isAdmin5 = false;
const isModerator = true;

if(isAdmin5 || isModerator){
    console.log("You can access this page")
}

//NOT !: This operator negates a boolean value, returning true if the operand is false, and false if the operand is true. It is often used to reverse the logic of a condition.
const isLoggedIn6 = false;
console.log(!isLoggedIn6); //This will log "true" to the console because the NOT operator negates the boolean value of "isLoggedIn6". We use this to reverse the logic of a condition.

//CONVERTIG A STRING TO A NUMBER: This is the process of converting a string value to a numeric value. It can be done using the Number() function, parseInt() function, or parseFloat() function. Examples of converting a string to a number include converting a string representation of an integer to an actual integer, converting a string representation of a floating-point number to an actual floating-point number, and converting a string representation of a number with leading or trailing whitespace to an actual number.
const age7 = "25";
const ageNumber = Number(age7)
const ageNumber2 = parseInt(age7)
const ageNumber3 = parseFloat(age7)
const ageNumber4 = +age7
; //This is an example of converting a string to a number using the Number() function. The value of "ageNumber" is now 25 instead of "25".
console.log(ageNumber, ageNumber2, ageNumber3, ageNumber4); //This will log "25" to the console because "ageNumber" is now a number instead of a string. We use this to convert a string value to a numeric value.

//Suggest assignments for the students on what we did today: Solev the problem of voting if the user meets the condition to vote, which are being above 18 years and having a valid ID. Use logical operators to check if the user meets both conditions and display a message indicating whether they are eligible to vote or not.

/*Also Build a Student Information Program
Create an HTML file connected to a JavaScript file.
In JavaScript, create:
firstName
lastName
age
course
school
state
isStudent
score
Then:
1. Give each variable an appropriate data type.
2. Use const or let appropriately.
3. Print each value to the console.
4. Use typeof to check the data types.
5. Convert the age from a string to a number.
6. Create a sentence using a template literal and also concatenate strings.
7. Display the student's information in the console.
*/