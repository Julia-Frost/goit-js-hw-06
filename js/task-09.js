const button = document.querySelector("button.change-color");
const body = document.querySelector("body");
const textEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  textEl.textContent = `${getRandomHexColor()}`;
});
