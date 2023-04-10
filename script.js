// create grid
// adjust box sizing accordingly


let displayBox = document.querySelector('.display-box');
let grid = document.getElementById('grid');

function windowSizing() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  if (width < 1028) {
    let displayBoxDim = 'height: ' + (height-128) + 'px; width: ' + (width-128) + 'px;'  
    let gridDim = 'height: ' + (height-196) + 'px; width: ' + (width-196) + 'px;'
    displayBox.setAttribute('style', displayBoxDim)
    grid.setAttribute('style', gridDim)
  }
}


function createGrid(dimensions = 16) {
  if (dimensions < 100) {
    // update grid size and grid square size based on dimesions and account for border width 1
    
    
    for (let i = 0; i < (dimensions*dimensions); i++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridSquare.setAttribute('style', '')
      grid.appendChild(gridSquare);
    }
  }
}
window.onresize = windowSizing()


