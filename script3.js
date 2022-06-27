var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"
]
var specialChar = ["!@#$%&*^?+="]
var numerics = ["0123456789"]

var genButton = document.querySelector("#generate");
genButton.addEventListener("click, createPassword");

function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}