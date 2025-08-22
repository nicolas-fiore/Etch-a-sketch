const container = document.querySelector(".container");
const reszie = document.querySelector("#resize");
const gridRemove = document.querySelector("#gridRemove"); 

//make button do stuff and make divs be created withing JS

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
            gridLayoutCreate.style.backgroundColor = getRandomColor(); 
            
        }); 
        
    }; 
};

function getGridSize() { 
   
    
}
function getGridSize () { 
    reszie.addEventListener("click", () => {
        const resizeGrid = prompt("Enter a number less than 100"); 
        if (resizeGrid != null) { 
            console.log("16"); 
        } else { 
            console.log("hi"); 
        }
    }); 
} 



gridSize(getGridSize); 