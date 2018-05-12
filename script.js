function createGrid(x) {
  const container = document.querySelector("#container");
  for (let i = 0; i < x * x; i++) {
    const content = document.createElement("div");
    content.classList.add("gridBox");
    container.appendChild(content);
  }
  container.setAttribute("style", `grid-template-columns: repeat(${x}, auto)`);
}

function modifyColor() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
      box.classList.add("hoverGridBox");
    });
  });
}

function clearGrid() {
  document.getElementById("container").innerHTML = "";
  let newGrid = prompt("Please type how many squares you want.");

  if (isNaN(newGrid)) {
    alert("You can only enter numbers!");
    clearGrid();
  } else if (newGrid == "") {
    clearGrid();
  } else if (newGrid === null) {
    createGrid(16);
    modifyColor();
  } else {
    createGrid(newGrid);
    modifyColor();
  }
}

document.getElementById("newGridButton").onclick = clearGrid;

function randomColors() {
  var hoverGrid = document.getElementsByClassName("hoverGridBox");
  let color = '#';
  let letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
  color += letters[Math.floor(Math.random() * letters.length)];
  
  hoverGrid.style.backgroundColor = color;

}

document.getElementById("randomColorsButton").onclick = randomColors;


createGrid(16);
modifyColor();