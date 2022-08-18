const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function createList() {
  const items = [];

  ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    items.push(item);
  });

  list.append(...items);
  console.log(list);
}

createList();
