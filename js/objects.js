const products = {
    name: "socks",
    price: 1090
};

console.log(products);
console.log(products.name)

products.name = "bugatti";
console.log(products);

products.newProperty = true;
console.log(products)

delete products.price;
console.log(products);

const product2 = {
    name: "shirt",
    "delivery-time": "1 day",
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1(){
        console.log("function inside object");
    }
};

console.log(product2["name"]);
console.log(product2["delivery-time"]);
console.log(product2.rating.stars);
product2.fun()

console.log(JSON.stringify(product2)); 

const jsonString = JSON.stringify(product2); 

console.log(JSON.parse(JSON.stringify(product2)));

const object1 = {
    message: 'hello',
};
const object2 = object1;

object1.message = 'good job'
console.log(object1);
console.log(object2);

const object3 = {
    message: 'good job'
};

console.log(object3 === object1);
console.log(object2 === object1);

