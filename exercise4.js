// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!

let green = document.getElementsByClassName("grid-cell green")
let red = document.getElementsByClassName("grid-cell red")
let blue = document.getElementsByClassName("grid-cell blue")
let grid = [green, red, blue]

grid.forEach((item)=>{
for (let i = 0; i < item.length; i++){
    
item[i].addEventListener("click",()=>{
        if ((i % 3)=== 0){
        item[i].style.backgroundColor = "green";
        }
        if ((i % 3)=== 1){
        item[i].style.backgroundColor = "red";
        }
        if ((i % 3)=== 2){
        item[i].style.backgroundColor = "blue";
        }
    })
}
})


