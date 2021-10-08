// button generates password
//presents a series of prompts for criteria to include
//select criteria
//chose a length of at least 8 char to 128
//character types: lowercase, uppercase, numeric and / or special
//When I anser each prompt, then input is validated and at least one character type should be selected
//When all are selected, password is generated that matches the selected criteria
//once generated, password is displayed in alert or written


// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";
var symbolCharacters = "!#$%&?¿";
var passwordLength = 8; 

// This function will generate the prompts
function getCriteria () {
  var characterPool = "";
  var numberOfCharacters = prompt ("How many characters should your password have? Type a number between 8 and 128, both included.");
  console.log(numberOfCharacters);
  var lowercaseCriteria = confirm("Do you want your password to have lowercase letters? Select 'Cancel' to exclude lowercase letters");
  if (lowercaseCriteria == true) {
    characterPool = characterPool.concat(lowercaseCharacters);
  } 
  console.log(characterPool);
  var uppercaseCriteria = confirm("Do you want your password to have uppercase letters? Select 'Cancel' to exclude uppercase letters");
  if (uppercaseCriteria == true) {
    characterPool = characterPool.concat(uppercaseCharacters);
  }
  console.log(characterPool);
  var numericCriteria = confirm("Do you want your password to have numbers? Select 'Cancel' to exclude numbers");
  if (numericCriteria == true) {
    characterPool = characterPool.concat(numberCharacters);
  }
  console.log(characterPool);
  var specialCriteria = confirm("Do you want your password to have special characters? Select 'Cancel' to exclude special characters");
  if (specialCriteria == true) {
    characterPool = characterPool.concat(symbolCharacters);
  }
  console.log(characterPool);
}

// This function will generate the password - referenced from stackoverflow.com - user "nicael"
function generatePassword () {
  var blankpassword = "";
  for (var i=0; i < passwordLength; i++) {
    blankpassword += uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
  }
  console.log(blankpassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);
//generateBtn.addEventListener("click", generatePassword);
//generateBtn.addEventListener("click", writePassword);
// 

