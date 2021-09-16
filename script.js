// Assignment Code
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numbers);
var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowLetters);
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specCharacters = ["!","@","#","$","%","^","&","*","(",")"];
var possibleCharacters = numbers.concat(lowLetters,upperLetters,specCharacters);
console.log(possibleCharacters);

function generatePassword(){

  // var length = parseInt( prompt('how many characters would you like your password to contain?)10); 

/* if (number.isNAN(length)) { 
  alert('password length must be given as a number');
  return null;
}

if (password < 8) {
  alert("Your password must have between 8 and 128 characters.")
  return null;
}


var isSpecialCha = confirm(" something goes here") 

*/

var password = window.prompt("How many characters would you like your password to have (8-128)? ")
console.log(password);
if (password < 8) {
  alert("Your password must have between 8 and 128 characters.")
  return null;
}
if (password > 128) {
  alert("Your password must have between 8 and 128 characters.")
  return null;
}



}
confirm("Click OK to confirm including lowercase characters")
confirm("Click OK to confirm including uppercase characters")
confirm("Click OK to confirm including numbers")
confirm("Click OK to confirm including special characters")

var generateBtn = document.querySelector("#generate");

var random = Math.floor(Math.random()*possibleCharacters.length)
console.log(possibleCharacters[random])
for (let i = 0; i < random; i++){
  console.log(random)
}
// Write password to the #password input
function writePassword() {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




