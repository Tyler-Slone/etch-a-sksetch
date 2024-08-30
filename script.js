let gridSize = 16;

const setSize = document.querySelector("setSize");
const grid = document.getElementById("grid");

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    grid.appendChild(gridElement);
  }
}

window.onload = () => {
  createGrid(gridSize);
};
