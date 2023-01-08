function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const numberInput = document.querySelector('[type="number"]')
createButton.addEventListener("click", onCreateButtonClickHandler);
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

const boxes = document.querySelector("div#boxes")

function onCreateButtonClickHandler() {
  const amount = numberInput.value;
  createBoxes(amount);
}


function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");

    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;

    boxes.append(element);

    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
