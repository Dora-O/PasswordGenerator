// Assignment Code
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}


var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$^&%*()+=-[]{}|:<>?,.";





var pwLength = prompt("Choose a number between 8 and 128 to have as characters in your password")

if (pwLength < 8){
  alert ("Length of password must be 8 to 128 characters!");
}
if (pwLength > 128){
  alert ("Length of password must be 8 to 128 characters!");
}

var low = prompt ("Would you like to include lowercase letters?")
var up = prompt ("Would you like to include uppercase letters?")
var numb = prompt ("Would you like to inlcude numbers?")
var spec = prompt ("Would you like to include special characters?")





var num = Math.floor(Math.random() * 120 ) + 8;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

