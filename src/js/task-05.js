const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", onInputHandler);

function onInputHandler(){
    if (input.value.trim()){
        output.innerHTML = input.value.trim();
    }
    else{
        output.innerHTML = "Anonymous";
    }
}