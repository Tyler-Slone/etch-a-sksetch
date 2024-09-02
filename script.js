let gridSize = 16;

const setSize = document.querySelector("setSize");
const grid = document.getElementById("grid");
const changeSizeBtn = document.getElementById("changeSizeBtn");

// Creates a 16x16 grid on page load and is mutable for changing grid size
function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.addEventListener("mouseover", changeColor);
    grid.appendChild(gridElement);
  }
}

// Changes color to black
function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

//Dependency for changing grid size
function clearGrid() {
  grid.innerHTML = "";
}

function changeSize(gridSize) {
  clearGrid();
  createGrid(gridSize);
}

// On screen elements to load and interact with
window.onload = () => {
  createGrid(gridSize);
};

//TODO Need to add error handling for inputs > 100, 0, negative, and not a num
changeSizeBtn.addEventListener("click", () => {
  gridSize = prompt("Please enter a new size up to 100");
  changeSize(gridSize);
});
