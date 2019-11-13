let gridDimension = 16;

function generateGrid() {
  const grid = document.querySelector('.grid');
  grid.style.setProperty("--gridSize", gridDimension);
  for (let i = 0; i < gridDimension ** 2; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    grid.appendChild(div);
  }
}
function resizeGrid() {
  const resize = document.querySelector('.resize');
  resize.addEventListener('click', () => {
    gridDimension = prompt('How big do you want the grid?');
  });
}

function resetColor() {

}

function colorGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = '#101010';
    });
  });
}

generateGrid();
resizeGrid();
resetColor();
colorGrid();