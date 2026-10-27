const username = "student";
const password = 12345;

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function validateForm() {
  let isValid = true;
  if (usernameInput.value === "") {
    document.getElementById("username-error").textContent =
      "Enter your username";
    isValid = false;
  } else if (usernameInput.value !== username) {
    document.getElementById("username-error").textContent = "Invalid username";
    isValid = false;
  } else {
    document.getElementById("username-error").textContent = "";
  }

  if (Number(passwordInput.value) === "") {
    document.getElementById("password-error").textContent =
      "Enter your password";
    isValid = false;
  } else if (Number(passwordInput.value) !== password) {
    document.getElementById("password-error").textContent = "Invalid password";
    isValid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  document.getElementById("username-name").textContent = usernameInput.value;

  /* 
    // labadan wan u comment gareeyey sababtoo ah hadaan tusale ahan username ka aan saxo oon qaldo password ka username ka wuu baabiinayaa,
    // password kana sidoo kale.
    // lakin waa la xalin karaa, so try it.

    usernameInput.value = "";
    passwordInput.value = "";
  */

  return isValid;
}

const logInBtn = document.getElementById("login");

usernameInput.addEventListener("input", () => {
  document.getElementById("username-error").textContent = "";
});
passwordInput.addEventListener("input", () => {
  document.getElementById("password-error").textContent = "";
});
logInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateForm() === true) {
    document.querySelector(".card:first-of-type").classList.add("hidden");
    document.querySelector(".card:last-of-type").classList.remove("hidden");
  }
});

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
  usernameInput.value = "";
  passwordInput.value = "";
  document.querySelector(".card:first-of-type").classList.remove("hidden");
  document.querySelector(".card:last-of-type").classList.add("hidden");
});
