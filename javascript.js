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
function setGridColorAndBorder() {
  pixel = document.querySelectorAll('.pixel');
  colorInput = document.querySelector('#set-color').value;
  if(hideBtn.value === 'Hide') {
    pixel.forEach((element) => {
      element.style.border = '0';
    })
  } else {
    pixel.forEach((element) => {
      element.style.border = '1px solid #000000';
    })
  }
}
function colorizePixelManage(event) {
  event.target.style.backgroundColor = colorInput; // for test
  pixel.forEach((element) => {
    element.addEventListener('mouseover', colorizePixel);
    element.addEventListener('mousedown', removeMouseOverEffet)
  })
}
function colorizePixel(event) {
  event.target.style.backgroundColor = colorInput; // for test
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
function eraser() {
  colorInput = '#ffffff';
  pixel.forEach((element) => {
    element.addEventListener('mousedown', colorizePixelManage)
  })
}

const container = document.querySelector('.container');
const setGridSizeBtn = document.querySelector('.set-grid-size');
const colorAndBorder = document.querySelector('.color-and-border');
const setBorderAndColor = document.querySelector('#set-border-color');
const hideBtn = document.querySelector('#hide-border');
const eraserBtn = document.querySelector('.eraser');

let pixelContainer, pixel, colorInput;


for(let row = 1; row <= 16; row++) {
  pixelContainer = document.createElement('div');
  pixelContainer.classList.add('pixel-container');
  container.appendChild(pixelContainer);
  for(let column = 1; column <= 16; column++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelContainer.appendChild(pixel);
  }
}
pixel = document.querySelectorAll('.pixel');
pixel.forEach((element) => {
  element.addEventListener('mousedown', colorizePixelManage)
})
colorInput = document.querySelector('#set-color').value;


hideBtn.addEventListener('click', () => {
  if(hideBtn.value === 'Hide') {
    hideBtn.value = 'Show';
  } else {
    hideBtn.value = 'Hide';
  }
})
setGridSizeBtn.addEventListener('click', setGridSize);
setBorderAndColor.addEventListener('click', setGridColorAndBorder);
eraserBtn.addEventListener('click', eraser);