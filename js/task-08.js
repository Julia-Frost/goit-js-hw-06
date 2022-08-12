const buttonSubmit = document.querySelector("button");
const inputEl = document.querySelectorAll("input");

buttonSubmit.addEventListener("submit", (event) => event.preventDefault());
inputEl.addEventListener("input", () => {
  console.log(inputEl.value);
  if (inputEl.value === "") {
    alert;
  }
});

console.log(inputEl);
