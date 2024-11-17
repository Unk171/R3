let generateBtn = document.querySelector("#generate");
const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+[]{}|;:,.<>?";

function writePassword() {
  const passwordLenght = document.getElementById("number").value;
  const length = passwordLenght;
  if (length < 8 || length > 128) {
    alert("Password lenght should be between 8 and 128");
    return;
  }
  const specialCheck = document.getElementById("special");
  const upperCaseCheck = document.getElementById("upperCase");
  const lowerCaseCheck = document.getElementById("lowerCase");
  const numbersCheck = document.getElementById("numbers");
  let characters = "";
  if (specialCheck.checked) {
    characters += special;
  };
  if (upperCaseCheck.checked) {
    characters += upperCaseLetters
  };
  if (lowerCaseCheck.checked) {
    characters += lowerCaseLetters
  };
  if (numbersCheck.checked) {
    characters += numbers
  };
  if (!characters) {
    alert("You should check one of characters type");
    return;
  }

  function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };
  let password = generatePassword(length)
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
