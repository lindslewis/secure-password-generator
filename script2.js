//let's try this again...
var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var specialChar = ["!@#$%^&*+=?"]

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);
// come back to meeeee
function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}

function genPassword() {
    let genPassword = confirm("Let's set some parameters on your password! \nFirst, would you like to have lower-case letters in your password?");

    //first confirmation to include lower-case
    if(genPassword){
        var compChoice = smallLetters[Math.floor(Math.random()*smallLetters.passwordComp)];
        alert("You have chosen to include lower-case letters.");

        //moves on to ask about upper-case letters
        let genPassword = confirm("Would you like to include upper-case letters?");
        if(genPassword){
            var compChoice = bigLetters[Math.floor(Math.random()*bigLetters.passwordComp)];
            alert("You have chosen to include upper-case letters.");

            //moves on to ask about special characters
            let genPassword = confirm("Would you like to include special characters?");
            if(genPassword){
                var compChoice = specialChar
            }
        } else{
            alert("You have chosen not to include upper-case letters.")
        }

    //first rejection of including lower-case
    } else{
        alert("You have chosen not to include lower-case letters.")

        //moves on to ask about upper-case letters
        let genPassword = confirm("Would you like to include upper-case letters?");
        if(genPassword){
            var compChoice =bigLetters[Math.floor(Math.random()*bigLetters.passwordComp)];
            alert("You have chosen to include upper-case letters.");
        }
    }
}








    // return "password"


//1. get input (input windows)

//2. input I need: special chars (confirm window), upper or lower case (confirm window), numerics (confirm window), how many chars they want (between 8 and 128--only true input box)

//3. need to check their choices back (edgecase), in case they submit invalid characters

//4. gen password

// var length = range(8, 128)





    







    // genButton onclick ="createPassword"


//to continue, I need to make sure I define genPassword()