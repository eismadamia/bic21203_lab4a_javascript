const message = document.querySelector("#message");
const changeBtn = document.querySelector("#changeBtn");

function changeMessage() {
  message.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);