//let's try this again...

function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}

genButton.addEventListener("click", createPassword);

//to continue, I need to make sure I define genPassword()