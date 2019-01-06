var open = document.querySelector(".open-feedback");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        email.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
        }
    }
});



