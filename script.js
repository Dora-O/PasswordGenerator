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


var userOpts={}


var pwLength = prompt("Choose a number between 8 and 128 to have as characters in your password")
pwLength= parseInt(pwLength);

if (pwLength < 8){
  alert ("Length of password must be 8 to 128 characters!");
}
if (pwLength > 128){
  alert ("Length of password must be 8 to 128 characters!");
}

var low = confirm ("Would you like to include lowercase letters?")
var up = confirm ("Would you like to include uppercase letters?")
var numb = confirm ("Would you like to inlcude numbers?")
var spec = confirm ("Would you like to include special characters?")

if (low===false && up===false && numb===false && spec===false){
  alert("You must select at least one character type!")
}



//if (numb===true){

//for (var i = 0; i < 10; i++) {
  //var newPw = Math.floor(Math.random() *pwLength);
  //console.log (newPw);

//}
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)