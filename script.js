console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)
// Select the empty p tag under that button
let text = document.querySelector("#helloText")
console.log(text)

// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click",function(event){
text.textContent="Hello"
})

// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let button2 = document.querySelector("#capsButton")
console.log(button2)
// Select the p tag under the button (says there's no need to shout)
let tag = document.querySelector("#capsText")
console.log(tag)
// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"
button2.addEventListener("click",function(event){
tag.textContent="THERES NO NEED TO SHOUT"
})


// Task 3: Dog image flow
// Select the dog image
let button3 = document.querySelector(".dogImage")
console.log(button3)
// Add an event listener to the dog image such that when it is clicked, the image src becomes happy-dog.jpeg
button3.addEventListener("click",function(event){
button3.imgsrc="happy-dog.jpeg"
})






