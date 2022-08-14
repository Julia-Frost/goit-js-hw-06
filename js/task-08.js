const formEl = document.querySelector(".login-form");
const buttonSubmit = document.querySelector("button");
const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", (event) => event.preventDefault());

const formElements = event.currentTarget.elements;
console.log(formElements);
const email = formElements.email.value;
console.log(email);
const password = formElements.password.value;
console.log(password);
// function checkLogin() {
//   event.preventDefault();
// }
const newInputArray = [...inputArray];
// console.log(newInputArray);
// const checkedInput = newInputArray.every((inputEl, newInputArray) =>
//   console.log(inputEl)
// );
// console.log(checkedInput);
form.addEventListener("submit", callbackForm);
function callbackForm(event) {
  event.preventDefault();
}
buttonSubmit.addEventListener("click", callbackCheck);
function callbackCheck() {
  if (checkedInput === true) {
    console.log("gdsfgzdrsg");
  }
}
