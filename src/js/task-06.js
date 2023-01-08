const myInput = document.querySelector("input#validation-input");

myInput.addEventListener("blur", onMyInputBlurHandler)

function onMyInputBlurHandler(event){
    const target = event.currentTarget;
    target.classList.remove("valid", "invalid")
    if (target.value.length == target.dataset.length) {
        target.classList.add('valid');
    }
    else{
        target.classList.add('invalid');
    }
}