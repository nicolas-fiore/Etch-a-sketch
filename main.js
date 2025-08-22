const container = document.querySelector(".container");
const gridlayout = document.querySelectorAll(".gridlayout"); 
const button = document.querySelector("#resize")

//make button do stuff and make divs be created withing JS


function changeColor() {
    gridlayout.forEach((grid) => {
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = getRandomColor(); 
            
        })
    });
}

function getRandomColor() { 
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`; 
}


button.addEventListener("click", () => {
    prompt("Enter a number less than 100"); 
}); 




changeColor(); 