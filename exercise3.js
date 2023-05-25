// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will turn the background color to green.
    // 2) An event listener that, when the element is double-clicked, will turn the background color to blue. 

// Next, we'll target the #cell-two element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border. 
    // 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.  

// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
    // 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"

    let one = document.getElementById("cell-one")
    let two = document.getElementById("cell-two")
    let three = document.getElementById("cell-three")
one.addEventListener("click", () => {
    one.style.backgroundColor = "blue"
})
one.addEventListener("dblclick", () => {
    one.style.backgroundColor = "green"
})

two.addEventListener("mouseover", () => {
    two.style.border = "2px solid green"
})
two.addEventListener("mouseout", () => {
    two.style.border = "2px solid black"
})

three.addEventListener("click",()=>{
    three.innerHTML = "Stop clicking me"
})
three.addEventListener("contextmenu",()=>{
    three.innerHTML = "no right clicks ether"
})