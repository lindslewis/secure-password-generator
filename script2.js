//let's try this again...
var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var specialChar = ["!@#$%^&*+=?"]
var numerics = ["0123456789"]
var length = range(8, 128)

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);
// come back to meeeee
function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}

//this is the start of collecting user responses
function genPassword() {
    let genPassword = confirm("Let's set some parameters on your password! \nFirst, would you like to have lower-case letters in your password?");

    //first confirmation to include lower-case
    if(genPassword){
        var compChoice = smallLetters[Math.floor(Math.random()*smallLetters.passwordComp)];
    

        //moves on to ask about upper-case letters
        let genPassword = confirm("Would you like to include upper-case letters?");
        if(genPassword){
            var compChoice = bigLetters[Math.floor(Math.random()*bigLetters.passwordComp)];


            //moves on to ask about special characters-- so far it includes upper and lower case letters
            let genPassword = confirm("Would you like to include special characters?");
            if(genPassword){
                var compChoice = specialChar[Math.floor(Math.random()*specialChar.passwordComp)];


                //with the inclusion of all characters so far, now asking about numerics
                let genPassword = confirm("Would you like to include numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];
        

                    //inclusion of ALL: now asking about length
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                         //got too into randomizing that I cant think of how to set this
                    }else {
                        //how do i make it so that it is invalid and brings it back around?
                    }


                //inclusion of special char, upper and lower case, but NO NUMBERS
                }else {
                    alert("Your password so far includes special characters, upper case, and lower case letters, but will not include numbers.");
                }
            }
        
        } else{
            alert("You have chosen not to include upper-case letters.")
        }

    //rejection of including lower-case
    } else{
        alert("You have chosen not to include lower-case letters.")

        //moves on to ask about upper-case letters, does not include lower-case
        let genPassword = confirm("Would you like to include upper-case letters?");
        if(genPassword){
            var compChoice =bigLetters[Math.floor(Math.random()*bigLetters.passwordComp)];
            alert("You have chosen to include upper-case letters.");

            //includes upper now asking for special char
            let genPassword = confirm("Would you like to include special characters?");
            if(genPassword){
                var compChoice = specialChar[Math.floor(Math.random()*specialChar.passwordComp)];
                alert("Your password will consist of upper-case letters and special characters.");


                //upper and special, now numbers
                let genPassword = confirm("Would you like to include numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];
                    alert("Your password ")
                }
            }else {

            }
        } else{
            alert("You have chosen not to include upper-case letters. You will not have any letters in your password.");
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