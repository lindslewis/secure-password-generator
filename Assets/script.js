var length;
var availableCharacters = "";

function generatePassword () {
    var password = ""
//compartmentalize as many functions as possible instead of having one function do a hundred things
// 1. prompt user for parameters
//length, special chars, numbers, uppercase, lowercase


getParameters();
//2. create random password from available characters
//for loop, run number of times user sets length to
// add random character to password string


for (i=0; i<length; i++) {
  // add 1 (or whatever amount) random character to password
}

return password
}


function getParameters() {

  // note: we could also do the var here, instead of globally but would require different responses in our code than what is currently here. only add returns when you need something back from it
  // set length via prompt
  // add characters to availableCharacters via user input (there is one that allows to choose yes or no)
  length = prompt()
  if (length < 8) {

  }
  //^^^ the length and if is to make its checks, so minimum requirements of the password, in this case.
}

//above is what we set up in office hours with henry, below is what was already available to us in this file.



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //this one must have a return since it is giving you a password as this is where the function is running
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button, the writePassword is telling the click what it will do when it is clicked
generateBtn.addEventListener("click", writePassword);

