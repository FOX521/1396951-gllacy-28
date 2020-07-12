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
      evt.preventDefault();
      modalform.classList.remove("modal-show");
      modalform.classList.remove("modal-error");
  }
});





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

/*slider*/

var mainBody = document.querySelector("body");
var siteWrapper = document.querySelector(".site-wrapper");
var BlockSlider = document.querySelector(".slider-controls")
var SliderButtonFirst = BlockSlider.querySelector(".button-slider-first");
var SliderButtonSecond = BlockSlider.querySelector(".button-slider-second");
var SliderButtonThree = BlockSlider.querySelector(".button-slider-three");

SliderButtonFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    siteWrapper.classList.remove("site-wrapper-2");
    siteWrapper.classList.remove("site-wrapper-3");
    siteWrapper.classList.add("site-wrapper-1");
    SliderButtonThree.classList.remove("current");
    SliderButtonSecond.classList.remove("current");
    SliderButtonFirst.classList.add("current");
    mainBody.classList.remove("background-body-twice");
    mainBody.classList.remove("background-body-three");
});

SliderButtonSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    siteWrapper.classList.remove("site-wrapper-1");
    siteWrapper.classList.remove("site-wrapper-3");
    SliderButtonFirst.classList.remove("current");
    SliderButtonThree.classList.remove("current");
    siteWrapper.classList.add("site-wrapper-2");
    SliderButtonSecond.classList.add("current");
    mainBody.classList.add("background-body-twice");
    mainBody.classList.remove("background-body-three");
});

SliderButtonThree.addEventListener("click", function (evt) {
    evt.preventDefault();
    siteWrapper.classList.remove("site-wrapper-1");
    siteWrapper.classList.remove("site-wrapper-2");
    SliderButtonFirst.classList.remove("current");
    SliderButtonSecond.classList.remove("current");
    siteWrapper.classList.add("site-wrapper-3");
    SliderButtonThree.classList.add("current");
    mainBody.classList.add("background-body-three");
    mainBody.classList.remove("background-body-twice");
});













