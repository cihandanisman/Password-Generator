// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var includeLowercase = confirm("Would you like it to include lowercase character?");
    var includeUppercase = confirm("Would you like it to include uppercase character?");
    var includeNumeric = confirm("Would you like it to include numeric characters?");
    var includeSpecial = confirm("Would you like it to include special characters?");

    if(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
      alert("Please select at least one character");
    } else {
      var password = generatePassword(passwordLength, includeLowercase, includeUppercase,includeNumeric, includeSpecial) ;
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }  
  } else{ 
    alert("Please enter a lenght that between 8 and 128 characters.");
    writePassword();

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ; 

function generatePassword(length, includeLowercase, includeUppercase, includeSpecial, includeNumeric) {
  var characterSet = '';
  if (includeLowercase) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) characterSet += "0123456789";
  if (includeSpecial) characterSet += "!@#$%^&*()_+=-";

  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}
  
