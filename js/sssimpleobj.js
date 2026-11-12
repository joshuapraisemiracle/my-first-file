const basketBall = {
    name: 'basketball',
    price: 2095
};

console.log(basketBall);

basketBall.price += 500;
console.log(basketBall);

basketBall['delivery-time'] = '3 days';

console.log(basketBall);


const product1 = {
    name: 'bugatti',
    price: 750
};

const product2 = {
    name: 'ferrari',
    price: 50
};


function comparePrice (product1, product2 ){
    if(product1.price < product2.price ) {
        return product1;
    }else {
        return product2;
    }

}

console.log(comparePrice(product1, product2))

function isSameProduct(product1, product2){
    if (product1.name === product2.name && product1.price === product2.price){

        return true;

    }else {
        return false;
    }

}

console.log(isSameProduct(product1, product2));
