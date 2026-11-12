console.log(document.all)

let titleHeader = document.getElementById("header")
titleHeader.innerText = "MONEY"
console.log(titleHeader)


let buttonHeader = document.getElementsByClassName("button")

buttonHeader[0].innerText = "click me" 
console.log(buttonHeader)

//styling

buttonHeader[0].style.backgroundColor = "blue"
buttonHeader[0].style.color = "white"
buttonHeader[0].style.border = "0px"
buttonHeader[0].style.padding = "10px 24px"

//using for loop

for (let i = 0; i < buttonHeader.length; i++) {
   buttonHeader[i].style.backgroundColor = "blue"
buttonHeader[i].style.color = "white"
buttonHeader[i].style.border = "0px"
buttonHeader[i].style.padding = "10px 24px" 
}

let input = document.querySelectorAll ("input")
console.log(input.length)

input.forEach(input => input.style.fontSize = "20px")


//textContent: allows you to read or change the text inside an HTML element.

//innerHTML: lets you read or replace the html markup inside an element.

//innerText: also reads or changes an elements text, but it behaves more like the text a personsees on the page

//textcontent
let paragraph = document.querySelector("#content p").innerHTML = "<h1>Good afternoon</h1>";
console.log(paragraph)

// values in an input
function greet (){
    let inputValue = document.getElementById("username").value

    document.getElementById("greeting").textContent = `hello, ${inputValue}`


}



let inputStyle = document.getElementById("input")
inputStyle.style.padding = "1px"
inputStyle.style.border = '1000px'

let tagName = document.getElementsByTagName("section")
tagName[0].classList.add('section1')
//tagName[0].classList.remove("section1")

console.log(tagName)

//text.classList.add("highlight"); // adds a class to an element
//






let userInput = document.getElementById("password")
let ToggleBtn = document.getElementById("passwordBtn")



ToggleBtn.addEventListener("click", function() {
    if (userInput.type === "password") {
        userInput.type = "text";
        ToggleBtn.textContent = "Hide Button";
    } else {
        userInput.type = "password";
        ToggleBtn.textContent = "Show Password";
    }
});



//creating html elements with js

let header1 = document.createElement('h1');
header1.textContent = "header created";
document.body.appendChild(header1)

//local storage

let usernameDB = {
    "user1" : "joshua",
    "user2" : "sharon",
    "user3" : "daddy",
    "user4" : "caleb",
}




let internalDB = localStorage.setItem("usernames", "joshua")
//localStorage.clear()
console.log("my data:", localStorage.getItem("username"))






