const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmitHandler);

function onFormSubmitHandler(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value.trim() && password.value.trim()){
        const emailPassword = {
            email: email.value,
            password: password.value,
        }

        console.log(emailPassword);

        event.currentTarget.reset();
    }
    else {
        alert("Email and password should not be empty!");
    }    
}