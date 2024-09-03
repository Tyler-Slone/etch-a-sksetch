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
  setGridElementSize(gridSize);
}

// Sets the size of each grid element based on gridSize
function setGridElementSize(gridSize) {
  const gridElements = document.querySelectorAll(".gridElement");
  const elementSize = 100 / gridSize;

  gridElements.forEach((element) => {
    element.style.flexBasis = `${elementSize}%`;
    element.style.height = `${elementSize}%`;
  });
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

changeSizeBtn.addEventListener("click", () => {
  let newSize = prompt("Please enter a new size up to 100");

  // Convert the input to a number
  newSize = parseInt(newSize);

  // Error handling
  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    gridSize = newSize;
    changeSize(gridSize);
  }
});
