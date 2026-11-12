//introduction to objects in javascript
//two ways of declaring an object in javascript
//1. using object literal syntax
let person = {
    name: "John",
    age: 30,
    city: "new york",
}

//2. using the object constructor
let person2 = new Object();
person2.name = "jane";
person2.age = 25;
person2.city = "Los angeles";
person2["country"] = "usa"; //adding a new property using bracket notation

//accessing object properties
console.log(person.name); //output: john
console.log(person2["age"]); //output: 25

//modifying object properties
person.age = 31;
//person[1] = 32
console.log(person.age);

//nested objects
let user = {
    name: "Alice",
    address: {
        street: "123 Main st",
        city: "New York",
        zipCode: "10001"
    }
};
console.log(user.name);
console.log(user.address.city);

//objects methods
let car = {
    make: "toyota",
    model: "camry",
    year: 2020,
    start: function(){
        console.log("Car started");
    },
    stop: function(){
        console.log("Car stopped");
    }
};
car.start();
car.stop();

//objects.keys() method - returns an array of a given object's own property names
let keys = Object.keys(car);
console.log(keys); //output: ["make", "model", "year", "start", "stop"]

//objects.value() method - returns an array of a given object's own enumerable property values
let values = Object.values(car);
console.log(values); //output: ["Toyota", "Camry", "2020", function, function]

//object.entries() method - returns an array of a given object's own enumerable string-keyed property [key, va]
let entries = Object.entries(car);
console.log(entries); //output: [["make", "Toyota"], ["model", "camry"], ["year", 2020], ["start", function],["stop", function]]

//object.assign() method - copies the values of all enumerable own properties from one or more
// source objects to a target
let target = {};
let source = {a: 1, b: 2 };
Object.assign(target, source);
console.log(target); //output: {a}

//object.freeze() method - freezes an object, preventing new properties from being added to it
// and marking all existing properties as read-only
let frozenObject = Object.freeze({ name: "Frozen"});
frozenObject.name = "Not Frozen"; //this will not change the name property
console.log(frozenObject.name); //output: "Frozen"

//object.seal() method - seals an object, preventing new properties from being added to it
// and marking all existing properties as non-configurable
let sealedObject = Object.seal({name: "Sealed"});
sealedObject.name = "Not Sealed"; // this will change the name property
console.log(sealedObject.name); //output: "Not Sealed" 

//object.hasOwnProperty() method- returns a boolean indicating whether the object has the
// specified property as its own property
let hasProperty = car.hasOwnProperty("make");
console.log(hasProperty); //output: true

//object.is() method - determines whether two values are the same value
let isSame = Object.is(25, 25);
console.log(isSame); //output: {}

//object.getPrototypeOf() method- returns the prototype
// (i.e. the internal [[prototype]] property) of the specified object
let prototype = Object.getPrototypeOf(car);
console.log(prototype); //output: {}

//object.setPrototypeOf() method - sets the prototype (i.e. the internal [
// [prototype]] property) of a specified object to another object or null
let newPrototype = { type: "Vehicle" };
Object.setPrototypeOf(car, newPrototype);
console.log(Object.getPrototypeOf(car)); //output: { type: "Vehicle" }

//object.defineProperty() method - defines a new property directly on an object, or modifies an
// existing property on an object, and returns the object
let obj = {};
Object.defineProperty(obj, "property1", {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(obj.property1); //output: 42

// another example of the object.define property method
let pos = {};
Object.defineProperty(pos, "terminalId", {
    value: "1235Q455",
    writable: false, // the property cannot be changed
    enumerable: true, // the property will show up during enumeration of the properties
    configurable: false // the property cannot be deleted or changed to an accessor property
});
console.log(pos.terminalId); //output: "1235Q455"

