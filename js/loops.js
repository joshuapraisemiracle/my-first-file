// introduction to loops in javascript
// loops are used to execute a block of code repeatedly until a specified condition is met.

//1. for loop
// we use a loop when we know the amount of iterations we want to perform.
// it consists of three parts: initialization, condition, and increment/decrement.

for (let i = 0; i < 5; i++ ){
    console.log("For Loop iteration: " + i );
}

// another example of a for loop that iterates through an array
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++ ) {
    console.log("For Loop iteration: " + fruits[i]);
}

//building of items table with for loop
let x = 5;

for(let i = 1; i <= 12; i++ ){
    let calculation = i * x;
    console.log(`${i} X ${x} = ${calculation}`)
}

// while loop
//it is being used when we dont know how many times to iterate but we know when to stop

const number = 7
let i = 1;

while (i <= 12) {
    let calculation = i * number;
    console.log (`${number} x ${i} = ${calculation}`);
    i++;
}

//another example
let hoursOfLecture = 2;

while (hoursOfLecture > 0 ) {
    console.log(`The time remains ${hoursOfLecture} hour(s) to end`);
    hoursOfLecture--;
}
console.log("Class has come to and end");

//do while loop
//this is a type of loop that runs once before checking the condition
//example 1

let password;
let attempts = 0;

do {
    password = "1234";
    attempts++;
    console.log(`Attempt ${attempts} : Pin entered `)
}while(password !== "CorrectPin" && attempts < 3);

//another example
let Passenger = 0;
const maxSeats = 14;

do {
    Passenger++;
    console.log(`Passenger ${Passenger} don pay`);
}while (Passenger < maxSeats);

//for...of 

const subjects = ["English", "Maths", "Physics", "Chemistry"];

for (let subject of subjects){
    console.log (`Read ${subject} tonight`);
}

const State = "LAGOS"

for (let letters of State) {
    console.log(`Looping through the letters ${letters} `);
}

//for in

const Student = {
    name: "Tunde",
    age: 20,
    school: "UNILAG"
};

for (const key in Student){
    console.log(`${key}: ${Student[key]}`);
}

//Example 2

const Marketlist = {
    tomato: 500,
    pepper: 600,
    maggi: 200,
    onions:100
};

let sum = 0;
for (const key in Marketlist){
    console.log(` ${key}: ${Marketlist[key]}`);

    sum += Marketlist[key];
}
console.log(`Total Item: #${sum}`);

//for each 

const customers = ["Ada", "Emeka", "Chidimma"];

customers.forEach((name, index) => {
    console.log(`${index + 1}. SMS sent to ${name}`);

});

const transportFair = ["500", "1000", "350"];

transportFair.forEach((price) => {
    console.log(`this user boarded for ${price}`);

});

//break and continue

for (let seat = 1; seat <=10 ; seat++ ) {
    if(seat === 4) break;
    console.log(`Seat ${seat} occupied`);

}

for (let seat = 1; seat <=10 ; seat++ ) {
    if(seat === 4) continue;
    console.log(`Seat ${seat} occupied`);

}

