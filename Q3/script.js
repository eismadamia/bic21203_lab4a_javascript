const button = document.querySelector("#generateBtn");
const list = document.querySelector("#numberList");

function generateNumbers() {
  list.replaceChildren();

  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = "The number is " + i;
    list.appendChild(item);
  }
}

button.addEventListener("click", generateNumbers);