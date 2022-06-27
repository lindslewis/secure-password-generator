//for Monday morning!!!! mostly working but is not reading my concats
var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var specialChar = ["!@#$%^&*+=?"]
var numerics = ["0123456789"] 
//my attempt to do the concat thing
// var chosenChars = 

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);


// //this is the start of collecting user responses
function genPassword() {

    //setting the desired length
    let length = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nPlease use integers");
        if (length >= 8 && length <=128){
            console.log(length)
            checkChoice(length)
        }else {
            alert("Invalid input: Please enter an integer between 8 and 128.");
            checkChoice(length)
            genPassword()
        }
    //input for lower-case letters
    //concat attempt maybe local since it adds the arrays depending on if they're selected by the user?
    let smallLetters = confirm("Would you like to include lower-case letters in your password?");
        if(smallLetters){
            console.log(smallLetters) 
            var chosenChars = chosenChars.concat(smallLetters);
        }
    
    //input for upper-case letters
    let bigLetters = confirm("Would you like to include upper-case letters in your password?");
        if(bigLetters){
            console.log(bigLetters)
            var chosenChars = chosenChars.concat(bigLetters);
        }
    //input for special characters
    let specialChar = confirm("Would you like to include special characters in your password?");
        if(specialChar){
            console.log(specialChar)
            var chosenChars = chosenChars.concat(specialChar);
        }
    //input for numbers
    let numerics = confirm("Would you like to include numbers in your password?");
        if(numerics){
            console.log(numerics)
            var chosenChars = chosenChars.concat(numerics);
        }
    //the loop needs to happen in the gen password function, I'm assuming, since the var chosenChars is defined locally here. would randomizer go here since it is based on the loop???
    for(i=0; i<=length.length; i++){
        password = [Math.floor(Math.random(chosenChars)*length.length)]
    }
        
    
    }

    //this is to check for user input validity in the above function
    function checkChoice(length){
        console.log(length)
        if(!length[0]){
            return false
        }else if(length = length < 8 , length > 128){   
            return false
        }
    }

//need to run a loop for the number of times that the user sets their length
//add random chars to password string-------- so take the gen password stuff and turn it into a new var called chosenChars
//Math.floor(Math.random(chosenChars)*length.length)
//for (i=0; i<=length.length; i++)
    function createPassword() {
        var password = genPassword();
        var passwordComp = document.querySelector("#password");
        passwordComp.value = password;
    }

 
    
        



    // let smallLetters = confirm("Would you like to include lower-case letters in your password?")
    //     if {
    //         console.log(password = passwordComp += smallLetters)
    //     }
    // let genPassword = confirm("Would you like to have lower-case letters in your password?");

    // //first confirmation to include lower-case
    // if(genPassword){
    //     var compChoice = smallLetters[Math.floor(Math.random()*smallLetters.passwordComp)];
    

    //     //moves on to ask about upper-case letters
    //     let genPassword = confirm("Would you like to include upper-case letters?");
    //     if(genPassword){
    //         var compChoice = bigLetters[Math.floor(Math.random()*bigLetters.passwordComp)];


    //         //moves on to ask about special characters-- so far it includes upper and lower case letters
    //         let genPassword = confirm("Would you like to include special characters?");
    //         if(genPassword){
    //             var compChoice = specialChar[Math.floor(Math.random()*specialChar.passwordComp)];


    //             //with the inclusion of all characters so far, now asking about numerics
    //             let genPassword = confirm("Would you like to include numbers?");
    //             if(genPassword){
    //                 var compChoice = numerics[Math.floor(Math.random()*numerics.passwordComp)];
        

    //                 //inclusion of ALL: now asking about length
    //                 length = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nFor example: 12");
    //                if(length > 8 || length < 128){

    //                }else if(length < 8 || length > 128){
    //                 // for (let i=7; i<129; i++){
    //                 //     if (i < 8)
    //                 }
                    
                    // }else {
                    //     ////edgecase
                    // }


 








    // return "password"


//1. get input (input windows)

//2. input I need: special chars (confirm window), upper or lower case (confirm window), numerics (confirm window), how many chars they want (between 8 and 128--only true input box)

//3. need to check their choices back (edgecase), in case they submit invalid characters

//4. gen password

// var length = range(8, 128)





    







    // genButton onclick ="createPassword"


//to continue, I need to make sure I define genPassword