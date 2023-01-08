const myText = document.querySelector("span#text");
const myInput = document.querySelector("input#font-size-control");

myInput.addEventListener("input", onMyInputHandler);

function onMyInputHandler(event) {
    myText.style.fontSize = event.currentTarget.value + "px";
}

