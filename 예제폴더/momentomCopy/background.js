const body = document.querySelector('body');

const imgNum = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./img/${imgNumber + 1}.jpeg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

function generatorRandom() {
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init() {
  const randomNum = generatorRandom();
  paintImage(randomNum);
}

init();