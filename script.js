function createGrid(x) {
    const container = document.querySelector("#container");
    for(let i = 0; i < x * x; i++) {
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
  var hoverGrid = document.getElementsByClassName("hoverGridBox");
  /*document.getElementById("container").innerHTML = "";*/
  for(i = 0; i < hoverGrid.length; i++) {
    hoverGrid[i].style.backgroundColor = "purple";
  
  /*modifyColor();*/
  }
}

document.getElementById("newGridButton").onclick = clearGrid;

createGrid(16);
modifyColor();