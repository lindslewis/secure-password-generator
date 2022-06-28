//for Monday morning!!!! mostly working but is not reading my concats
//set the below into true arrays
var smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
var bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialChar = ["!","@","#","$","%","^","&","*","+","?"]
var numerics = ["0","1","2","3","4","5","6","7","8","9"] 
 
//my attempt to do the concat thing
var chosenChars = []

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", createPassword);
//EDGECASE NOTE: ALWAYS BUILD IT TO WORK INITIALLY AND THEN EDGECASE
//edgecase also for non a number (NAN)
// //this is the start of collecting user responses
function createPassword() {
    var password = genPassword();
    var passwordComp = document.querySelector("#password");
    passwordComp.value = password;
}


function genPassword() {

    //setting the desired length
    let length = prompt("How long would you like your password to be? \nMinimum allowed: 8\nMaximum allowed: 128\nPlease use integers");
    
    //edgecasing for them not doing numbers but letters
    // var characters = length.split("")
    // console.log(characters)
    // var lengthFlag = true;
    //     for (i=0; i<characters.length; i++){
    //         if(!length.includes(characters[i])){
    //             lengthFlag=false
    //         }
    //     }
    //     if(lengthFlag == false){
    //         alert("Invalid: You did not enter a number.")
    //         genPassword()
    //     }
    //the above is still the edgecase

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
    //concat attempt maybe local since it adds the arrays depending on if they're selected by the user?
    let smallLetters = confirm("Would you like to include lower-case letters in your password?");
        if(smallLetters){
            console.log(smallLetters) 
            chosenChars = chosenChars.concat(smallLetters);
            console.log(chosenChars)
        }
    
    //input for upper-case letters
    let bigLetters = confirm("Would you like to include upper-case letters in your password?");
        if(bigLetters){
            console.log(bigLetters)
            chosenChars = chosenChars.concat(bigLetters);
            console.log(chosenChars)
        }
    //input for special characters
    let specialChar = confirm("Would you like to include special characters in your password?");
        if(specialChar){
            console.log(specialChar)
            chosenChars = chosenChars.concat(specialChar);
            console.log(chosenChars)
        }
    //input for numbers
    let numerics = confirm("Would you like to include numbers in your password?");
        if(numerics){
            console.log(numerics)
            chosenChars = chosenChars.concat(numerics);
            console.log(chosenChars)
            
        }
//not returning selected letters, just true however many times the length is.
//maybe each chosen char needs to be randomized?
    for (i=0; i<length; i++){
        password += chosenChars[Math.floor(Math.random())*chosenChars.length]
        console.log(password)
    }

    function checkChoice(length){
        console.log(length)
        if(!length[0]){
            return false
        }else if(length = length < 8 , length > 128){   
            return false
        }
    }
    createPassword()
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