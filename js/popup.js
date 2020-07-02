var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".feedback-block");
var close = document.querySelector(".close-feedback")
var FormFeedBack = popup.querySelector(".appointment-form");

var custQues = popup.querySelector("[name=question]");
var custName = popup.querySelector("[name=cust-name]");
var custEmail = popup.querySelector("[name=feedback]");

/* Popup Feedback */
link.addEventListener("click", function (evt) {
  evt.preventDefault();
    popup.classList.add("modal-show");
    custName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});

FormFeedBack.addEventListener("submit", function (evt) {
  if (!custName.value || !custEmail.value || !custQues.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth;
    popup.classList.add("modal-error");
  }
})









