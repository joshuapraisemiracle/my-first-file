const popularMovie2026 = {

    title: "Spider Man",
    monthOfRelease: "july",
    cast: ["tom holland", "zandeya"],
    rating: 5,
    review: function () {
        console.log("the movie " + this.title + " has a rating " +  this.rating)
        
    }


}



//accessing functions in an object
console.log(popularMovie2026.review())

//square bracket method of accessing object
console.log(popularMovie2026["cast"])

//dot method
console.log(popularMovie2026.rating)


let changeValue = popularMovie2026.rating = 8;
console.log("a value has been changed: ", changeValue)


let changeTitle = popularMovie2026.title = "Vikings";
console.log("a title has been changed: ", changeTitle)

//deleting values in an object
let deleteValue = delete popularMovie2026.monthOfRelease
console.log("deleted value:", deleteValue)


//nested objects

const carBrand = {
    name: "benz",
    models: {
        sClassSeries: {
            Vboot: {
                color: ["black", "red", "green"],
                price: 50000
            }
        },
        aClassSeries: {
            AMG: {
                color: ["black", "red", "green"],
                price: 300


            }
        }
    }
}

console.log("Brand: ", carBrand.models.sClassSeries.Vboot.color[2])

console.log("brand:", carBrand["models"]["aClassSeries"]["AMG"]["color"] [2]) //bracket notation

//object methods
console.log("object keys:", Object.keys(carBrand.models.sClassSeries)) 
console.log(typeof(Object.keys(carBrand)))

console.log("object values: ", Object.values(carBrand))


//map
let multiply = [3]
console.log(multiply)
console.log("multiply by 2:", multiply.map(value => + 1))

//filter

let filterSearch = ["shoes", "shirt", "pant", "jacket", "shoes"]
let products = filterSearch.filter(value => value === "necklace")
console.log("filter products:", products)



