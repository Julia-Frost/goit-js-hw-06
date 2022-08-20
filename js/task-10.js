const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesArrey = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  let amount = inputEl.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  // задаем базовые размеры блока
  let baseSize = 30;
  // создаем новый фрагмент
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    // Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
    let size = baseSize + i * 10;
    // создаем див
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}`;
    // запихуем в фрагмент тег див
    fragment.appendChild(div);
  }
  // добавляем новосозданные див(ы) в родительский блок
  boxes.appendChild(fragment);
}

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
