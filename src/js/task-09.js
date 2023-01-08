function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

function onChangeColorButtonClickHandler(event) {
  const randomColor = getRandomHexColor();
  span.innerHTML = randomColor;
  body.style.backgroundColor = randomColor;
}

changeColorButton.addEventListener("click", onChangeColorButtonClickHandler);