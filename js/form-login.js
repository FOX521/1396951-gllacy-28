var form = document.querySelector(".form-login");
var linklogin = document.querySelector(".link-login");
var modalform = document.querySelector(".modal-search");
var login = form.querySelector("[name=login-e-mail]");
var password = form.querySelector("[name=login-password]");

var isStorageSupport = true;
var storage = "";

/* Form login */
try {
  storage = localStorage.getItem("login")
} catch (err) {
  isStorageSupport = false;
}

linklogin.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  modalform.classList.toggle("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
  evt.preventDefault();
   modalform.classList.remove("modal-error");
  modalform.offsetWidth = modalform.offsetWidth;
  modalform.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalform.classList.contains("modal-show")) {
      evt.preventDefault();
      modalform.classList.remove("modal-show");
      modalform.classList.remove("modal-error");
    }
  }
});





