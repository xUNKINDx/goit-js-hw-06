let counterValue = 0;

const value = document.querySelector("span#value");

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", onDecrementButtonClick);
incrementButton.addEventListener("click", onIncrementButtonClick);

function onIncrementButtonClick() {
    counterValue++;
    updateValue();
}

function onDecrementButtonClick() {
    counterValue--;
    updateValue();
}

function updateValue(){
    value.innerHTML = counterValue;
}