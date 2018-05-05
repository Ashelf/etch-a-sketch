function createGrid(x) {
    const container = document.querySelector('#container');
    for(let i = 0; i < x * x; i++) {
      const content = document.createElement("div");
      content.classList.add("gridBox");
      container.appendChild(content);
    }
    container.setAttribute('style', `grid-template-columns: repeat(${x}, auto)`);
  }

  

  createGrid(16);