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
var special = "!@#$^&%*()+=-[]{}|:<>?,.";
var numbers = "1234567890";





var pwLength = prompt("Choose a number between 8 and 128 to have as characters in your password")

if (pwLength < 8){
  alert ("Length of password must be 8 to 128 characters!");
}
else (pwLength > 128){
  alert ("Length of password must be 8 to 128 characters!");
}






var num = Math.floor(Math.random() * 120 ) + 8;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

