const formEl = document.querySelector(".login-form");
const buttonSubmit = document.querySelector("button");
const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //   console.log(name, value);
  // });

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(formData);
  }
}
