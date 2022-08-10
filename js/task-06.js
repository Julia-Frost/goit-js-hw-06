const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
    return;
  }
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
});
