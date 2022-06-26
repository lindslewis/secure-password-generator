//let's try this again...


// come back to meeeee
function createPassword() {
    var password = genPassword(genButton);
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}

genButton.addEventListener("click", createPassword());
    var genButton = document.querySelector("#generate");
    // genButton onclick ="createPassword"


//to continue, I need to make sure I define genPassword()