// var length = range(8, 128)


//TODO: generate input alerts for the user to set their password parameters
//TODO: collect the user choices (sessionStorage?)
//TODO: edgecase-- how to approach an invalid input

//1. prompt user input for the length of the password, this may be the only one that needs a true input prompt, the others may just need confirm prompts?
//2. prompt user input for inclusion of special characters
//3. prompt user input for inclusion of uppercase
//4. prompt user input for inclusion of lowercase
//5. prompt user input for the inclusionof numerics

//TODO: after user input, responses need validated. and >one character type selected.

//TODO: once all prompts are answered, the password should be generated (on the page). so connect the prompt pop-ups with the generate password button?

//TODO: HTML DOM events that may be good to use: reset (to restart for a new password?), click, submit??


// function generatePassword () {
//     var password = ""
//compartmentalize as many functions as possible instead of having one function do a hundred things

// document.getElementsByClassName(".btn").onclick = function() {
//   var length = prompt("Password length: \n How many characters would you like to have? \n Must be between 8 and 128 characters.");
//   length = range("8, 128")
//   checkChoice(length)
// }

// function onclick() {
// var btn = document.querySelector = (".btn");

// }
// function defineParameters() {
//     let length = range(8, 128);

// }

//2. create random password from available characters
//for loop, run number of times user sets length to
// add random character to password string


for (i=0; i<length; i++) {
  add 1 (or whatever amount) random character to password
// }

// return password
// }

for (let i = 8; i <=128; i++)
// function getParameters() {

  // note: we could also do the var here, instead of globally but would require different responses in our code than what is currently here. only add returns when you need something back from it
  // set length via prompt
  // add characters to availableCharacters via user input (there is one that allows to choose yes or no)
  length = prompt()
  if (length < 8) {

  // }
  //^^^ the length and if is to make its checks, so minimum requirements of the password, in this case.


//above is what we set up in office hours with henry, below is what was already available to us in this file.

var specialChar = ["!#$%&()*+-<=>?@"]
var smallLetters = ["abcdefghijklmnopqrstuvwxyz"]
var bigLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numerics = ["0123456789"]
var genBtn = document.getElementsByClassName(".btn")


var password = genPassword()
var passBox = document.getElementById("#password");
    passBox.value = password;


genBtn.addEventListener("click", genPassword);

//maybe it needs a different function first, like in the rps page. like. setting parameters before the function genpassword comes in
function getParameters() {
  var userInput = confirm("We need to set some parameters for your password! Please follow the following prompts!")
}
genBtn.onclick = function genPassword() {
  var length = prompt("Password length: \n How many characters would you like to have? \n Must be between 8 and 128 characters.");
  length = range("8, 128")
  checkChoice(length)
}
genPassword()