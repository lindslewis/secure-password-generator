//for Monday morning!!!! mostly working but is not reading my concats
//set the below into true arrays
var smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
var bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialChar = ["!","@","#","$","%","^","&","*","+","?"]
var numerics = ["0","1","2","3","4","5","6","7","8","9"] 
 
//my attempt to do the concat thing
let chosenChars = [];

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);
//EDGECASE NOTE: ALWAYS BUILD IT TO WORK INITIALLY AND THEN EDGECASE

function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;

}

// //this is the start of collecting user responses
function genPassword() {
    var password = ""
    //setting the desired length
    let length = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nPlease use integers");


        if (length >= 8 && length <=128){
            console.log(length)
            checkChoice(length)
            // chosenChars = chosenChars.concat(length);
            // console.log(chosenChars)

        }else {
            alert("Invalid input: Please enter an integer between 8 and 128.");
            checkChoice(length)
            genPassword()
        }
    //input for lower-case letters
    //Note: I was originally just redeclaring the above vars with my chars in it, so new names for the confirmation prompts (so that's why I was getting true returned back as my password)
    var smolBois = confirm("Would you like to include lower-case letters in your password?");
        if(smolBois){
            chosenChars = chosenChars.concat(smallLetters);
            console.log(chosenChars);
        }
    
    //input for upper-case letters
    var bigBois = confirm("Would you like to include upper-case letters in your password?");
        if(bigBois){
            chosenChars = chosenChars.concat(bigLetters);
            console.log(chosenChars);
        }
    //input for special characters
    var specialBois = confirm("Would you like to include special characters in your password?");
        if(specialBois){
            chosenChars = chosenChars.concat(specialChar);
            console.log(chosenChars);
        }
    //input for numbers
    var nums = confirm("Would you like to include numbers in your password?");
        if(nums){
            chosenChars = chosenChars.concat(numerics);
            console.log(chosenChars);
            
        }
    //to randomize selection for password, originally had a parantheses in the wrong place, but now fixed.
        for (let i=0; i<length; i++){
            password += chosenChars[Math.floor(Math.random()*chosenChars.length)];
            console.log(password);
        }
        return(password)

//this is my edgecasing for length
    function checkChoice(length){
        console.log(length)
        if(!length[0]){
            return false
        }else if(length = length < 8 , length > 128){   
            return false
        }
    }

}

    //the loop needs to happen in the gen password function, I'm assuming, since the var chosenChars is defined locally here. would randomizer go here since it is based on the loop???
    
    
    // for(i=0; i<=length.length; i++){
    //     password += chosenChars.charAt[Math.floor(Math.random(chosenChars)*length.length)]
    //     }
    // }
  
    //maybe make chosenChars it's own function?, I have the returns above now, so maybe something else now?
    
    // function chosenChars(){
    //     if(smallLetters = confirm){
    //         [] = chosenChars.concat(smallLetters);
    //     }
    //     if(bigLetters = confirm){
    //         [] = chosenChars.concat(bigLetters);
    //     }
    //     if(specialChar = confirm){
    //         [] = chosenChars.concat(specialChar);
    //     }
    //     if(numerics = confirm){
    //         [] = chosenChars.concat(numerics);
    //     }
    // }
    

    //this is to check for user input validity in the above function

//need to run a loop for the number of times that the user sets their length
//add random chars to password string-------- so take the gen password stuff and turn it into a new var called chosenChars
//Math.floor(Math.random(chosenChars)*length.length)
//for (i=0; i<=length.length; i++)


 
    
        



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