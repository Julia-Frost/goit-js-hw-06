let numberInput = document.querySelector("#controls input");
console.log(numberInput);
let createBtn = document.querySelector("[data-create]");
console.log(createBtn);
let destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
