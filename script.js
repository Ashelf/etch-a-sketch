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

document.getElementById("blackColor").onclick = modifyColor();

function clearGrid() {
  document.getElementById("container").innerHTML = "";
  let newGrid = prompt("Please type how many squares you want.");

  if (isNaN(newGrid)) {
    alert("You can only enter numbers!");
    clearGrid();
  } else if (newGrid === "") {
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

function getRandomColors() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach((box) => {
    box.addEventListener('mouseenter', (e) => {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      let bgroundColor = "rgb(" + x + "," + y + "," + z + ")";
      
      box.style.backgroundColor = bgroundColor;
    });
  });
}

document.getElementById("randomColorsButton").onclick = getRandomColors;



createGrid(16);
modifyColor();