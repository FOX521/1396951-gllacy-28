var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".feedback-block");
var close = document.querySelector(".close-feedback")
var FormFeedBack = popup.querySelector(".appointment-form");
var wrapFeedBack = document.querySelector(".wrapper-feedback")

var custQues = popup.querySelector("[name=question]");
var custName = popup.querySelector("[name=cust-name]");
var custEmail = popup.querySelector("[name=feedback]");

var isStorageSupport = true;
var storage = "";
var storageName = "";

/* Popup Feedback */

try {
  storage = localStorage.getItem("login");
  storageName =localStorage.getItem("CustName");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
    popup.classList.add("modal-show");
    wrapFeedBack.classList.add("wrapper-feedback-on");
    if (storage) {
      custEmail.value = storage;
      custName.value = storageName;
    } else {
      custName.focus();
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  wrapFeedBack.classList.remove("wrapper-feedback-on");

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      wrapFeedBack.classList.remove("wrapper-feedback-on");
    }
  }
});


FormFeedBack.addEventListener("submit", function (evt) {
  if (!custName.value || !custEmail.value || !custQues.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth;
    popup.classList.add("modal-error");
  }else {
    if (isStorageSupport) {
    localStorage.setItem("login", custEmail.value);
    localStorage.setItem("CustName", custName.value)
    }
  }
})












