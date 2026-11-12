function sayHello(){
    console.log("hello there");

}

function processUser(callback){
    console.log("processing user...");

    callback();

}

processUser(sayHello)




function greet(name, myFunction) {
    console.log("welcome back: ", name);

    myFunction(); //callback starts
}

function goodBye() {
    console.log("second function");
}

greet("joshua", goodBye);



function displayMessage(){
    console.log("payment successful")
}

function processPayment(amount, callback){
    console.log("processing payment of ", amount)
    callback()

}

function checkUser(){
    console.log("hello")
    
}

processPayment(5000, checkUser)


