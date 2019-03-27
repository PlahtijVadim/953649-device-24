var link = document.querySelector(".write-us-btn");

var    popup = document.querySelector(".modal-write-us");
var    popup_close = popup.querySelector(".modal-close");
var    form = popup.querySelector(".form-write-us");
var    nickname = popup.querySelector("[name=name]");
var    email = popup.querySelector("[name=email]");
var    letter = popup.querySelector("[name=letter]");
var    map_link = document.querySelector(".map");
var    map_modal = document.querySelector(".modal-map");
var    map_close = map_modal.querySelector(".modal-close");
var    storage_name = localStorage.getItem("name");
var    storage_email = localStorage.getItem("email");

link.addEventListener("click", function(a) {
  a.preventDefault();
  popup.classList.add("modal-show");
  storage_name ? (nickname.value = storage_name, storage_email ? (email.value = storage_email, letter.focus()) : email.focus()) : nickname.focus();
});

  popup_close.addEventListener("click", function(a) {
  a.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

  window.addEventListener("keydown", function(a) {
  27 === a.keyCode && (popup.classList.contains("modal-show") && (popup.classList.remove("modal-show");
  popup.classList.remove("modal-error"));
  map_modal.classList.contains("modal-show") && map_modal.classList.remove("modal-show"));
});

  form.addEventListener("submit", function(a) {
  nickname.value && email.value && letter.value ? (localStorage.setItem("name", nickname.value);
  localStorage.setItem("email", email.value)) : (a.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error"));
});

  map_link.addEventListener("click", function(a) {
  a.preventDefault();
  map_modal.classList.add("modal-show");
});

 map_close.addEventListener("click", function(a) {
   a.preventDefault();
   map_modal.classList.remove("modal-show")
});
