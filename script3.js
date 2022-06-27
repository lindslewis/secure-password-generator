var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"
]
var specialChar = ["!@#$%&*^?+="]
var numerics = ["0123456789"]

//to make the button work
var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);


//for grabbing user input for the password
function genPassword() {
    length = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nPlease use integers");
        if (length >= 8 || length <=128){
            let passwordComp = (passwordComp += genPassword(length));
           var console.log(passwordComp = passwordComp += length)
        }else if (length < 8 || length > 128){
            alert("Invalid: Please enter an integer between 8 and 128.")
        }
    //chosenChar is what the user has chosen so far
    bigLetters = confirm("Would you like to include capitalized letters in your password?");
    if {
        console.log(passwordComp = passwordComp += bigLetters)
    }
    smallLetters = confirm("Would you like to include lower-case letters in your password?");
    if {
        console.log(passwordComp = passwordComp += smallLetters)
    }

    }
    // bigLetters = confirm("Would you like to include capitalized letters in your password?");
    //     if {
    //         console.log(passwordComp = passwordComp += bigLetters)
    //     }

//actual password creation
function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}
