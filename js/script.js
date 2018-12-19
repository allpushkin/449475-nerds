var open = document.querySelector(".open-feedback");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
});



window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
        }
    }
});

