createGrid(16);

function createGrid(x) {
   for(var rows = 0; rows < x; rows++) {
       for(var columns = 0; columns < x; columns++) {
           let div = document.createElement("div");
           div.classList.add("grid");
           container.appendChild(div);
       }
   }
}