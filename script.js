
    


// Assignment Code

 passwordTxt = document.getElementById("password");
 length = document.getElementById("length");
 incUpper = document.getElementById("upper");
 incLower = document.getElementById('lower');
 incNumbers = document.getElementById("numbers");
 incSpecial = document.getElementById("special");
 generateBtn = document.getElementById("generate");

// Write password to the #password input, function button works here but doesn't let me make password..
function generatePassword() {
  var passwordLength=prompt("Password should be between 8-128?");
  var isLower=confirm("do you want lowercase?");
  var isUpper=confirm("do you want Uppercase");
  var isNumber=confirm("do you want a number");
  var isSpecial=confirm("do you want to use special");
  
}
console.log=generatePassword()

//varibables wont load 


function characters(){
  let key = ['upper','lower','number','special'];
    length = ['8-128'];
    lower = ['abcdefghijklmnopqrstuvwxyz'];
    upper = ['ABCDEFGHIJKLMNOPQRSTUVWXY'];
    number = ['0123456789'];
    special = ['!@#$%^&*'];
}
console.log=characters()


// Add event listener to generate button
function  gerneratePassword  (length, ) {
  let password = "";
  for (let i = 0; i < length; i++) 
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  
  return password;
};  

console.log=generatePassword








