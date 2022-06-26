//let's try this again...

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);
// come back to meeeee
function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}
function genPassword() {
    alert("Let's set some parameters on your password!")
    return "password"
};



    







    // genButton onclick ="createPassword"


//to continue, I need to make sure I define genPassword()