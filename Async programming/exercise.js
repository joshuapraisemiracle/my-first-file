console.log("a")
console.log("b")
console.log("c")

//async

console.log("a")
setTimeout(function () {
    console.log("b");

}, 4)
console.log("c")

//callback functions
function greet(name, myFunction) {
    console.log("welcome back: ", name);

    myFunction(); //callback starts
}

function goodBye() {
    console.log("second function");
}

greet("joshua", goodBye);


let myCustonmPromise = new Promise((resolve, reject) => {
    let product = true

    if (product) {
        resolve("product is available")

    } else {
        reject("product is not available")
    }
})


console.log(myCustonmPromise.then((result) => {
    console.log(result)
}).catch((err) => {
    console.error("error message:", err)
}).finally (() => {
    console.log("operation ended")
}))



//async keyword before a function makes the function return a promise. await keyword waits for a promise

async function usersData() {
    let users = fetch("https://jsonplaceholder.typicode.com/users")

    try {
        let response = await users
        let data = await response.json()
        console.log(data)

    } catch {
        console.log("Not Found")
    }
}

usersData()



async function usersData() {
    let users = fetch("https://jsonplaceholder.typicode.com/todos")

    try {
        let response = await users
        let data = await response.json()
        console.log(data)

    } catch {
        console.log("Not Found")
    }
}

usersData()


async function usersData() {
    let users = fetch("https://jsonplaceholder.typicode.com/todos")

    try {
        let response = await users
        let data = await response.json()

        data.forEach(function(user) {
            console.log (user.title)
        })

    } catch {
        console.log("Not Found")
    }
}

usersData()





