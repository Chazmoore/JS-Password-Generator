// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numerical = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','~','?','{','}','-','<','>','/',];

var charcterCount = 8;
var options =[];



// Write password to the #password input
function writePassword() {
  var prompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (prompts) {
  var password = generatePassword();
  passwordText.value = password;
  } 
} 

  

function generatePassword() {
    
    var randomPassword = "";
    for(var i = 0; i < charcterCount; i++) {
        var randomIndex = Math.floor(Math.random() * options.length);
        randomPassword = randomPassword + options[randomIndex];   
    }
    return randomPassword;
  }

  

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function getPrompts(){
  options = [];
  
  charcterCount = parseInt(prompt("How Many characters would you like from 8-128?"));

  if (charcterCount <8 || charcterCount > 128){
    alert ("Character count  must be a number between 8 & 128");
    return false;
  }

  if (confirm("Do you want any lowercase letters?")) {
    options = options.concat(lowerCase);
  }

  if (confirm("Do you want any Uppercase letters?")) {
    options = options.concat(upperCase);
  }

  if (confirm("Do you want any special characters?")) {
    options = options.concat(special);
  }

  if (confirm("Do you want any numbers?")) {
    options = options.concat(numerical);
  }
  return true
}
