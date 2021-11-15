const popupElement = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const profileButton = document.querySelector(".profile__edit-button");
let formElement = document.querySelector(".form");
let userName = document.querySelector(".profile__title");
let userText = document.querySelector(".profile__subtitle");
let FormName = document.querySelector(".form__type_text_name");
let FormRole = document.querySelector(".form__type_text_role");

function openPopup() {
  popupElement.classList.add("popup_opened");
  FormName.value = userName.textContent;
  FormRole.value = userText.textContent;
  
}

function closePopup() {
  popupElement.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = FormName.value;
  userText.textContent = FormRole.value;
  closePopup();
}

profileButton.addEventListener("click", openPopup)
closeButton.addEventListener("click", closePopup)
formElement.addEventListener("submit", formSubmitHandler)

