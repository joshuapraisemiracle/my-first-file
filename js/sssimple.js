const hour = 9;
const name = "joshua" ;

if(hour >= 6 && hour <= 12 ){
console.log( `good morning ${name} `);

}else if (hour >= 13 && hour <= 17){
console.log(`good afternoon ${name} `);

} else {
    console.log(`good night ${name} `)
}



const age = 7;
const isHoliday = true;

if ((age <= 6 || age >= 65 ) && !isHoliday ){
    console.log("discount")
} else {
    console.log("no discount");
}



let random = Math.random();

if ( random < 0.5 ){
console.log("heads")
}else {
    console.log("tails")
}



let result = "heads";

let guess = "tails";

if ( guess === result ){
    console.log("you win")
}else {
    console.log("you lose")
}


function greet (name){
    console.log(`hello ${name}`)

    if(name === undefined){
        console.log("hi there")

    }
}

greet()
