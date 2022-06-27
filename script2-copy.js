//let's try this again...
var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var specialChar = ["!@#$%^&*+=?"]
var numerics = ["0123456789"]
// var passwordComp = 
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

    //setting the desired length
    let length = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nPlease use integers");
        if (length >= 8 , length <=128){
            console.log(length)
            checkChoice(length)

        }else if (length < 8 , length > 128){
            alert("Invalid input: Please enter an integer between 8 and 128.");
            genPassword()
        }
    //input for lower-case letters
    let smallLetters = confirm("Would you like to include lower-case letters in your password?");
        if(smallLetters){
            console.log(smallLetters)
        }
    
    //input for upper-case letters
    let bigLetters = confirm("Would you like to include upper-case letters in your password?");
        if(bigLetters){
            console.log(bigLetters)
        }
    //input for special characters
    let specialChar = confirm("Would you like to include special characters in your password?");
        if(specialChar){
            console.log(specialChar)
        }
    //input for numbers
    let numerics = confirm("Would you like to include numbers in your password?");
        if(numerics){
            console.log(numerics)
        }
    }


    function checkChoice(length){
        console.log(length)
        if(!length[0]){
            alert("Invalid input: Please select a number between 8 and 128.")
            return false
        }else if(length < 8 , length > 128){   
            alert("Invalid input: Please select a number between 8 and 128.")
            return false
        }
        
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