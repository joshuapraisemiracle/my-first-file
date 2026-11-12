const funky = Number("99") + 1;
console.log(funky);

function Addition (a, b, c) {
    c = a + b
    console.log("Added:" , c);
}

Addition(2, 3, 4)





function returnedValue(a, b) {
    return a + b
}

let calledFunction = returnedValue(3, 6)
console.log("returned value:", calledFunction)


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

//array



const usernames = ["monday", "john", "othniel", "kpk"];

const isPresent = "josh"

if (usernames.includes(isPresent) && isPresent !== "") {
    console.log("available")
}else {
    console.log("not available")
}


const emails = ['joshu793@gmail.com', 'othniel@gmail.com', 'kelvin@gmail.com', 'youngnigga@gmail.com']
const emailDatabase = [...emails]

console.log("email database:", emailDatabase);

if (emailDatabase.includes('joshu793@gmail.com')) {
    console.log("email already exists in the database")
}

const checkEmail = emailDatabase.indexOf('othniel@gmail.com');
console.log(checkEmail);


let users = ['joshua', 'sharon', 'caleb', 'daddy']
users.splice(2, 0, 'othniel')
console.log(users)


//console.log('added user!', users.slice(1,3));

//rest operator

let a = [1, 2, 6]
let b = ["joshua", ...a]
console.log(b)

function PackedItems(...items){
    console.log(items);
}

PackedItems("banana", "isabel", "kelvin", "laptop")

//spread operator
let cartItems = ["pen", "laptop", "phone", "book"]
let cart = [...cartItems]
console.log("items in my cart:", cart);

//for each




//arrow functions. its a simpler way of writing functions

const sum = (a, b) => a + b
console.log("sum of two numbers:", sum(2,3))


//continuation on foreach 

let result = 0;
let sumItems = [1, 2, 3, 4, 5]

sumItems.forEach(myItems => result += myItems)
console.log("sum of items:", result);

//cartlog
let wristWatchUnitPrice = 50000
let quantity = [1, 2, 3]
quantity.forEach(totalPrice => wristWatchUnitPrice *= totalPrice)
console.log("total price of wrist watch:", wristWatchUnitPrice)

//map

let multiply = [1]
console.log(multiply)
console.log("multiply by 2:", multiply.map(value => value + 1))




