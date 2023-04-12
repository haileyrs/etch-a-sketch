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

function clearAll(clicked = true) {
  changeMode('singleBtn');
  let squares = document.getElementsByClassName('grid-square')
  for (i of squares) {
    i.style.backgroundColor = '#E4DCCF'
  }
  if (clicked) {
    clearBtn.classList.add('active');
    setTimeout(() => {
      clearBtn.classList.remove('active');
    }, 500);
  }
}

function changeSize() {
  currentSize = sizer.value;
  sizeVal.innerHTML = `${sizer.value}x${sizer.value}`
  createGrid(sizer.value);
}

function fillSquare(e) {
  switch (currentMode) {
    case 'singleBtn':
      e.target.style.backgroundColor = '#002B5B'
      break
    case 'rainbowBtn':
      let colors = ['#30E3DF', '#FCE22A', '#F37121', '#D61355', '#590696', '#A3F7BF']
      e.target.style.backgroundColor = colors[Math.floor(Math.random()*6)]
      break
    case 'eraserBtn':
      e.target.style.backgroundColor = '#E4DCCF'
      break
  }
}

function createGrid(dimensions = 16) {
  clearAll(false);
  grid.innerHTML = '';
  if (dimensions < 100) {
    // update grid size and grid square size based on dimesions 
    let gridDim = `grid-template-columns: repeat(${dimensions}, 1fr); grid-template-rows: repeat(${dimensions}, 1fr);`
    grid.setAttribute('style', gridDim)

    for (let i = 0; i < (dimensions*dimensions); i++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.addEventListener('mouseover', (e) => fillSquare(e));
      grid.appendChild(gridSquare);
    }
  }
}

createGrid()
