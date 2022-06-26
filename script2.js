//let's try this again...
var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var specialChar = ["!@#$%^&*+=?"]
var numerics = ["0123456789"]
// const length = range(8, 128)

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);
// come back to meeeee
function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}

// //this is the start of collecting user responses
function genPassword() {
    let genPassword = confirm("Would you like to have lower-case letters in your password?");

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
                         //for loop
                    }else {
                        ////edgecase
                    }


                //all but numbers, now length
                }else {
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                         //for loop
                    }else {
                        //edgecase
                    } 
                }
            
            //letters no special char
            }else {
                let genPassword = confirm("Would you like to include numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];
                
                //letters with numbers, now length
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else {
                        //for loop, invalid response
                    }
                
                //letters only
                }else {
                    let genPassword = confirm("Your password will only consist of letters.\nIs this okay?");
                    if(genPassword){
                        let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                        if(genPassword){
                            //for loop
                        }else {
                            //edgecase
                        }
                    
                    //if it isn't okay
                    }else {
                    //bring them back to the beginning
                    }
                }
            }
        //lower no upper, now special char
        }else {
            let genPassword = confirm("Would you like to include special characters?");
            if(genPassword){
                var compChoice = specialChar[Math.floor(Math.random()*specialChar.passwordComp)];

                //lower and special now number
                let genPassword = confirm("Would you like to incude numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];

                    //length
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else {
                        //edgecase
                    }

                //lower and special now length
                }else {
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else {
                        //edgecase
                    }
                }


            //no special char, only lower now number
            }else {
                let genPassword = confirm("Would you like to incude numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];

                    //lower and number, now length
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else{
                        //edgecase
                    }

                //password only contains lower
                }else {
                    let genPassword = confirm("Your password will only contain lower-case letters, is this okay?");
                    if(genPassword){
                        let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                            if(genPassword){
                                //forloop
                            }else {
                                //edgecase
                            }
                    //if not okay
                    }else {
                        //bring back to start
                    }
                }
            }
        }

    //NO LOWER-CASE
    } else{
        //moves on to ask about upper-case letters, does not include lower-case
        let genPassword = confirm("Would you like to include upper-case letters?");
        if(genPassword){
            var compChoice =bigLetters[Math.floor(Math.random()*bigLetters.passwordComp)];

            //upper and now special
            let genPassword = confirm("Would you like to include special characters?");
            if(genPassword){
                var compChoice = specialChar[Math.floor(Math.random()*specialChar.passwordComp)];


                //upper,special, now numbers
                let genPassword = confirm("Would you like to include numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];
    

                    //upper,special, numbers, now length
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //this will be whatever it does with the length
                    }else {
                        //edgecase
                    }

                //upper, special now length
                }else {
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else {
                        //edgecase
                    }
                }

            //upper only, numbers now
            }else {
                let genPassword = confirm("Would you like to include numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];

                    //uppers and num now LENGTH
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    
                    //if invalid response
                    }else {
                        //edgecase
                    }
    
                //only uppers    LENGTH
                }else {
                    let genPassword = confirm("Your password will only include upper-case letters. Is this okay?");
                    if(genPassword){
                        let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                        if(genPassword){
                            //for loop
                        }else {
                            //edgecase
                        }

                    //no
                    }else{
                        //bring back to start
                    }
                }
            }
        // //NO LETTERS
        //moving on to special char
        }else {
            let genPassword = confirm("Would you like to include special characters?");
            if(genPassword){
                var compChoice = specialChar[Math.floor(Math.random()*specialChar.passwordComp)];

                //special char included, Numbers
                let genPassword = confirm("Would you like to include numbers?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];

                    //special char and numbers, now length
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else {
                        //edge case
                    }

                //password only has special char, now LENGTH
                }else {
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //for loop
                    }else {
                        //edge case
                    }
                }

            //no letters, no special char
            }else {
                let genPassword = confirm("Without letters or special characters, your password will only consist of numbers. Is this okay?");
                if(genPassword){
                    var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];
                    

                    //now the length with only numbers
                    let genPassword = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
                    if(genPassword){
                        //forloop
                    }else {
                        //edgecase
                    }


                //if they say no, take them back to the beginning
                }else {
                    //loop back to the start
                }
            }
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


//to continue, I need to make sure I define genPassword