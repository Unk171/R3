let generateBtn = document.querySelector("#generate");
const allCharacters = {
  upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCaseLetters: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()_+[]{}|;:,.<>?"
};

function writePassword() {
  const passwordLenght = document.getElementById("number").value;
  const length = passwordLenght;
  if (length < 8 || length > 128) {
    alert("Password lenght should be between 8 and 128");
    return;
  }
  const specialCheck = document.getElementById("special").checked;
  const upperCaseCheck = document.getElementById("upperCase").checked;
  const lowerCaseCheck = document.getElementById("lowerCase").checked;
  const numbersCheck = document.getElementById("numbers").checked;
  let characters = "";
  if (specialCheck) characters += allCharacters.special;
  if (upperCaseCheck) characters += allCharacters.upperCaseLetters;
  if (lowerCaseCheck) characters += allCharacters.lowerCaseLetters;
  if (numbersCheck) characters += allCharacters.numbers;
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
  const password = generatePassword(length)
  document.querySelector("#password").value = password;
}

generateBtn.addEventListener("click", writePassword);