function setGridSize() {
  let sizePixel = parseInt(prompt('Whole integer\nMax: 100', '16'));
  if(isNaN(sizePixel)) {
    return;
  } else if(sizePixel <= 100 && sizePixel > 0) {
    resetAll();
    for(let row = 1; row <= sizePixel; row++) {
      pixelContainerCreate = document.createElement('div');
      pixelContainerCreate.classList.add('pixel-container');
      container.appendChild(pixelContainerCreate);
      for(let column = 1; column <= sizePixel; column++) {
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelContainerCreate.appendChild(pixel);
      }
    }
  } else {
    alert('Try again...');
  }
}
function setGridColor() {

}
function resetAll() {
  let pixelContainer = document.querySelectorAll('.pixel-container')
  if(container.hasChildNodes()) {
    pixelContainer.forEach((ele) => {
      ele.remove();
    })
  }
}

const container = document.querySelector('.container');
const setGridSizeBtn = document.querySelector('.set-grid-size');

let pixelContainerCreate, pixel;
setGridSizeBtn.addEventListener('click', setGridSize);