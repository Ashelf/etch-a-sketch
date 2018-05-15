function createGrid(x) {
  const container = document.querySelector("#container");
  for (let i = 0; i < x * x; i++) {
    const content = document.createElement("div");
    content.classList.add("gridBox");
    container.appendChild(content);
  }
  container.setAttribute("style", `grid-template-columns: repeat(${x}, auto)`);
}

function getColorBlack() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "black";
    });
  });
}

function getRandomColors() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      let bgroundColor = "rgb(" + x + "," + y + "," + z + ")";
      
      box.style.backgroundColor = bgroundColor;
    });
  });
}

function getColorRed() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "red";
    })
  })
}

function getColorYellow() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "yellow"
    })
  })
}

function getColorBlue() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "blue"
    })
  })
}

function getColorOrange() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "orange"
    })
  })
}

function getColorGreen() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "green"
    })
  })
}

function getColorPurple() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "purple"
    })
  })
}

function getColorWhite() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.addEventListener("mouseenter", function(e) {
      box.style.backgroundColor = "white";
    })
  })
}

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
    getColorBlack();
    eraseGrid();
  } else {
    createGrid(newGrid);
    getColorBlack();
    eraseGrid();
  }
}

function eraseGrid() {
  let grid = document.querySelectorAll(".gridBox");
  grid.forEach(function(box) {
    box.style.backgroundColor = "white";
  })
}

var selectColor = document.getElementById("selectColor");
selectColor.addEventListener("change", chooseColor);

function chooseColor(event) {
  if (selectColor.value == "black") {
    getColorBlack();
  } else if (selectColor.value == "red") {
    getColorRed();
  } else if (selectColor.value == "yellow") {
    getColorYellow();
  } else if (selectColor.value == "blue") {
    getColorBlue();
  } else if (selectColor.value == "orange") {
    getColorOrange();
  } else if (selectColor.value == "green") {
    getColorGreen();
  } else if (selectColor.value == "purple") {
    getColorPurple();
  }
}

document.getElementById("newGridButton").onclick = clearGrid;
document.getElementById("randomColorsButton").onclick = getRandomColors;
document.getElementById("getWhite").onclick = getColorWhite;
document.getElementById("eraseAll").onclick = eraseGrid;

createGrid(16);
getColorBlack();
eraseGrid();