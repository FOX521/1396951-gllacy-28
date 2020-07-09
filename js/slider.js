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




