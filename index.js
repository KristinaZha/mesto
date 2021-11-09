const popupElement = document.querySelector(".popup")
const closeButton = document.querySelector(".popup__close-button")
const profile = document.querySelector(".profile")
const profileButton = document.querySelector(".profile__edit-button")


function openPopup() {
  popupElement.classList.remove("popup_opened")
}

function closePopup() {
  popupElement.classList.add("popup_opened")
}


profileButton.addEventListener("click", openPopup)

closeButton.addEventListener("click", closePopup)

let formElement = document.querySelector(".popup__form")
let nameInput = document.querySelector(".popup__type-name")
let textInput = document.querySelector(".popup__type-text")
let saveButton = document.querySelector(".popup__type-submit")
let userName = document.querySelector(".profile__title")
let userText = document.querySelector(".profile__subtitle")

function formSubmitHandler(evt) {
  evt.preventDefault()
 

  let newName = nameInput.value
  userName.textContent = newName

  let newText = textInput.value
  userText.textContent = newText

  closePopup();
}
console.log(formElement);
formElement.addEventListener("submit", formSubmitHandler)
