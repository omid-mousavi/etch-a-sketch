function setGridSize() {
  let sizePixel = parseInt(prompt('Whole integer\nMax: 100', '16'));
  if(isNaN(sizePixel)) {
    
  } else if(sizePixel <= 100 && sizePixel > 0) {
    resetAll();
    for(let row = 1; row <= sizePixel; row++) {
      pixelContainer = document.createElement('div');
      pixelContainer.classList.add('pixel-container');
      container.appendChild(pixelContainer);
      for(let column = 1; column <= sizePixel; column++) {
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelContainer.appendChild(pixel);
      }
    }
  } else {
    alert('Try again...');
  }
  pixel = document.querySelectorAll('.pixel');
  pixel.forEach((element) => {
    element.addEventListener('mousedown', colorizePixelManage)
  })
}
function setGridColor() {

}
function colorizePixelManage(event) {
  event.target.style.backgroundColor = 'blue'; // for test
  pixel.forEach((element) => {
    element.addEventListener('mouseover', colorizePixel);
    element.addEventListener('mousedown', removeMouseOverEffet)
  })
}
function colorizePixel(event) {
  event.target.style.backgroundColor = 'blue'; // for test
}
function removeMouseOverEffet() {
  pixel.forEach((element) => {
    element.removeEventListener('mouseover', colorizePixel);
    element.removeEventListener('mousedown', removeMouseOverEffet)
  })
}
function resetAll() {
  pixelContainer = document.querySelectorAll('.pixel-container')
  if(container.hasChildNodes()) {
    pixelContainer.forEach((ele) => {
      ele.remove();
    })
  }
}

const container = document.querySelector('.container');
const setGridSizeBtn = document.querySelector('.set-grid-size');

let pixelContainer, pixel;


setGridSizeBtn.addEventListener('click', setGridSize);
