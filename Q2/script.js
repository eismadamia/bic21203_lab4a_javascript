const userInput = document.querySelector("#userInput");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

function checkInput() {
  const inputText = userInput.value.trim();

  if (inputText === "") {
    result.textContent = "Please enter a valid number!";
    return;
  }

  const number = Number(inputText);

  if (Number.isNaN(number)) {
    result.textContent = "Please enter a valid number!";
  } else if (number < 10) {
    result.textContent = "The number is lower than 10";
  } else if (number > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);