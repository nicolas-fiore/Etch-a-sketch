const container = document.querySelector(".container");
const reszie = document.querySelector("#resize");
const clear = document.querySelector("#clear"); 

function getRandomColor() { 
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`; 
}

function gridSize(size) { 
    for(let i = 0; i < size * size; i++) { 
        const gridLayoutCreate = document.createElement("div") 
        const rowCol = "1 1 " + (100 / size) + "%";

        gridLayoutCreate.className ="gridlayout"; 
        gridLayoutCreate.style.flex = rowCol
        container.append(gridLayoutCreate)

        gridLayoutCreate.style.padding = `${Math.max(1, 10 - size/3)}px`;
        
        gridLayoutCreate.addEventListener("mouseenter", () => {
            gridLayoutCreate.style.transition ="background-color 0.50s ease"
            gridLayoutCreate.style.backgroundColor = getRandomColor(); 
            
        }); 
        
    }; 
};


function getGridSize () { 
    reszie.addEventListener("click", () => {
        const resizeGrid = prompt("Enter a number less than 100"); 
        if(resizeGrid === null || resizeGrid === "") {
            gridsize(16); 
        } else if (resizeGrid > 100 || resizeGrid <= 0) { 
            resizeGrid = alert("The number you entered was above 100 or below 0, Please try again"); 
        } else {
            container.innerHTML = ""; 
            gridSize(resizeGrid); 
            
        }
    }); 
} 

clear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".gridlayout"); 
    squares.forEach(grid => {
        grid.style.backgroundColor = "white"; 
    });
   

})
gridSize(16); 
getGridSize(); 