let colorMode;
const grid = document.querySelector('.grid');
const resize = document.querySelector('.resize');
const buttons = document.querySelectorAll('.buttons');

function generateGrid(squareLength) {
  const numOfSquares = squareLength ** 2;
  for (let i = 0; i < numOfSquares; i += 1) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.backgroundColor = 'rgb(255, 255, 255)';
    grid.appendChild(square);
  }
  grid.style.gridTemplateColumns = `repeat(${squareLength}, 1fr)`;
}

function clearGrid() {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i += 1) {
    grid.removeChild(squares[i]);
  }
  const size = prompt('How big do you want the grid?', 16);
  if (!size) {
    generateGrid(16);
  } else {
    generateGrid(size);
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function colorBlack() {
  return '#000';
}

function colorErase() {
  return '#FFF';
}

function colorRandom() {
  const r = getRandomInteger(0, 256);
  const g = getRandomInteger(0, 256);
  const b = getRandomInteger(0, 256);
  return `rgb(${r},${g},${b})`;
}

function colorShade(color) {
  const rgb = color.replace(/[^\d,]/g, '').split(',');
  rgb[0] -= Math.round((255 / 100) * 10);
  rgb[1] -= Math.round((255 / 100) * 10);
  rgb[2] -= Math.round((255 / 100) * 10);
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

function setMode() {
  if (this.id === 'black') colorMode = 'black';
  if (this.id === 'erase') colorMode = 'erase';
  if (this.id === 'random') colorMode = 'random';
  if (this.id === 'shade') colorMode = 'shade';
}

function colorSquare(e) {
  if (e.target.matches('.square')) {
    if (colorMode === 'black') e.target.style.backgroundColor = colorBlack();
    if (colorMode === 'random') e.target.style.backgroundColor = colorRandom();
    if (colorMode === 'erase') e.target.style.backgroundColor = colorErase();
    if (colorMode === 'shade')
      e.target.style.backgroundColor = colorShade(
        e.target.style.backgroundColor
      );
  }
}

resize.addEventListener('click', clearGrid);
grid.addEventListener('mouseover', colorSquare);
buttons.forEach(button => button.addEventListener('click', setMode));

generateGrid(16);
