// create grid
// adjust box sizing accordingly

const gridSpace = 600
let currentMode = 'singleBtn'
let currentSize = 16

// grid
const displayBox = document.querySelector('.display-box');
const grid = document.getElementById('grid');

// buttons
const singleBtn = document.querySelector('.single-mode');
const rainbowBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser-mode');
const clearBtn = document.querySelector('.clear-mode');
const slider = document.querySelector('#sizer');
const sizeVal = document.querySelector('#sizeVal');

singleBtn.addEventListener('click', () => changeMode('singleBtn'));
rainbowBtn.addEventListener('click', () => changeMode('rainbowBtn'));
eraserBtn.addEventListener('click', () => changeMode('eraserBtn'));
clearBtn.addEventListener('click', () => clearAll());
slider.addEventListener('input', () => changeSize());

function changeMode(newMode) {
  switch (currentMode) {
    case 'singleBtn':
      singleBtn.classList.remove('active')
      break
    case 'rainbowBtn':
      rainbowBtn.classList.remove('active')
      break
    case 'eraserBtn':
      eraserBtn.classList.remove('active')
      break
  };

  switch (newMode) {
    case 'singleBtn':
      singleBtn.classList.add('active')
      break
    case 'rainbowBtn':
      rainbowBtn.classList.add('active')
      break
    case 'eraserBtn':
      eraserBtn.classList.add('active')
      break
  };

  currentMode = newMode;
}

function clearAll() {
  clearBtn.classList.add('active');
  changeMode('singleBtn');
  setTimeout(() => {
    clearBtn.classList.remove('active');
  }, 500); 
}

function changeSize() {
  currentSize = sizer.value;
  sizeVal.innerHTML = `${sizer.value}x${sizer.value}`
  createGrid(sizer.value);
}

function createGrid(dimensions = 16) {
  clearAll();
  grid.innerHTML = '';
  if (dimensions < 100) {
    // update grid size and grid square size based on dimesions 
    let gridDim = `grid-template-columns: repeat(${dimensions}, 1fr); grid-template-rows: repeat(${dimensions}, 1fr);`
    grid.setAttribute('style', gridDim)

    for (let i = 0; i < (dimensions*dimensions); i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      grid.appendChild(gridSquare);
    }
  }
}

createGrid()
