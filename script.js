// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lower = "abcdefghijklmnopqrstuvwxyz";
var lowerArray =lower.split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArray =upper.split("");
var numbers = "1234567890";
var numbersArray= numbers.split("");
var special = "!@#$^&%*()+=-[]{}|:<>?,.";
var specialArray =special.split("");

function userOpts(){
var length = parseInt(prompt("Choose a number between 8 and 128 to have as characters in your password"));
console.log(length);
if (length < 8 || length > 128){
  alert ("Length of password must be 8 to 128 characters!");
  }

else{
  var low = confirm ("Would you like to include lowercase letters?");
  var up = confirm ("Would you like to include uppercase letters?");
  var numb = confirm ("Would you like to inlcude numbers?");
  var spec = confirm ("Would you like to include special characters?");

if (low===false && up===false && numb===false && spec===false){
  alert("You must select at least one character type!");
  
}
}
var questionOpts ={
  length:length,
  lower:low,
  upper:up,
  numbers:numb,
  special:spec,
}

return questionOpts
}

function generatePassword(){
  var opts = userOpts();
  console.log (opts);
  var passwordCombo =[];
  console.log (passwordCombo);

  if (opts.lower){
    for (i=0; i< lower.length; i++){
      passwordCombo.push(lower[i])
    }
   }
    
   if (opts.upper){
    for (i=0; i< upper.length; i++){
      passwordCombo.push(upper[i])
    }
   }

   if (opts.numbers){
    for (i=0; i< numbers.length; i++){
      passwordCombo.push(numbers[i])
    }

    if (opts.special){
      for (i=0; i< special.length; i++){
        passwordCombo.push(special[i])
      }
     }
   }
   
   var newPassword=[]
  
   for (var i=0; i < opts.length; i++){
     var randomPicker = Math.floor(Math.random()*passwordCombo.length);
     newPassword.push(passwordCombo[randomPicker])
   }
   console.log(newPassword)

   var finalPw = newPassword.join('')
    console.log(finalPw);
    return finalPw
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword)