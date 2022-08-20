const inputEl = document.querySelector("#controls input");
console.log(inputEl);
const createBtn = document.querySelector("[data-create]");
console.log(createBtn);
const destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);
const boxesArrey = document.querySelector("#boxes");
console.log(boxesArrey);
let numberToCreate = 0;
const createdElements = [];
inputEl.addEventListener("input", () => (numberToCreate = inputEl.value));
console.log("numberToCreate", numberToCreate);
let size = 30;

createBtn.addEventListener("click", () => {
  for (let i = 0; i <= numberToCreate; i += 1) {
    const createdEl = document.createElement("div");
    createdEl.style.backgroundColor = getRandomHexColor();
    createdEl.style.width = `${size + i * 10}px`;
    createdEl.style.height = `${size + i * 10}px`;
    createdElements.push(createdEl);
  }
});
console.log("createdElements", createdElements);
boxesArrey.appendChild(...createdElements);

destroyBtn.addEventListener("click", () => {
  console.log("zadestroilos");
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
