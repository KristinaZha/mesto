import Card from './Card.js';
import FormValidator from './FormValidator.js';


const popups = document.querySelectorAll(".popup")
const popupProfile = document.querySelector(".popup-profile")
const buttonClose = document.querySelector(".popup-profile__close-button")

const profileButton = document.querySelector(".profile__edit-button")
const userName = document.querySelector(".profile__title")
const userText = document.querySelector(".profile__subtitle")
const buttonAdd = document.querySelector(".profile__button")

const formElement = document.querySelector(".form")
const userNameInput = document.querySelector(".form__input_name")
const formInputRole = document.querySelector(".form__input_role")

const popupAddCard = document.querySelector(".popup-add")
const buttonCloseAdd = document.querySelector(".popup-add__close-button")

export const popupPhoto = document.querySelector(".popup-foto")
export const imagePopup = document.querySelector(".popup-foto__image")
export const captionPopup = document.querySelector(".popup-foto__caption")
const buttonClosePhoto = document.querySelector(".popup-foto__close-button") // кнопка закрытие попапа с  фото

// добавление карточки через form
const elementPic = document.querySelector(".element__pic")
const elementTitle = document.querySelector(".element__title")
const elements = document.querySelector(".elements")
const element = document.querySelector(".element")


const name = document.querySelector(".form__input_text")
const hrefPic = document.querySelector(".form__input_image")
const formAddCard = document.querySelector(".form-card")
const submitButton = popupAddCard.querySelector(".form__type-submit")


const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__type-submit',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'error-message_visible',
  inactiveButtonClass: 'form__button_disabled'
}
const editFormValidator = new FormValidator(settings, popupProfile);
const addCardFormValidator = new FormValidator(settings, popupAddCard);

// массив
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]

// ф-я открытия попапов
export function openPopup(popups) {
  popups.classList.add("popup_opened")
  document.addEventListener("keydown", closePopupEscape)
}

// ф-я закрытия попапов
function closePopup(popups) {
  popups.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopupEscape)
}

//ф-я закрытия попапов esc
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"))
  }
};
//перебор  попапов, для закрытия по оверлею
popups.forEach((popups) => {
  popups.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup_opened")) {
      closePopup(popups)
    }

  })
});

//форма добавления картинки
function handleSubmitCardForm(evt) {
  evt.preventDefault()
  const inputName = name.value
  const inputImage = hrefPic.value
  renderCard({ name: inputName, link: inputImage });
  formAddCard.reset()
  closePopup(popupAddCard)
}

function openAddCardModal() {
  openPopup(popupAddCard)
  addCardFormValidator.disableSubmitButton()
};


//ф-я редактирования профайла
function openProfile() {
  userNameInput.value = userName.textContent
  formInputRole.value = userText.textContent
  openPopup(popupProfile)
}

//форма изменений профайла
function handleSubmitProfileForm(evt) {
  evt.preventDefault()
  userName.textContent = userNameInput.value
  userText.textContent = formInputRole.value
  closePopup(popupProfile)

}
//новая карточка
function createCard(data) {
  const card = new Card(data)
  const cardElement = card.getCardElement()
  return cardElement
}

function renderCard(data) {
  const card = createCard(data)
  elements.prepend(card)
}


initialCards.forEach((data) => {
  renderCard(data, elements)
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();


// слушатели профайла

profileButton.addEventListener("click", () => openPopup(popupProfile))
profileButton.addEventListener("click", openProfile)

// слушатели добавления картинки

buttonAdd.addEventListener('click', openAddCardModal)
buttonAdd.addEventListener("click", () => openPopup(popupAddCard))
buttonClose.addEventListener("click", () => closePopup(popupProfile))
buttonCloseAdd.addEventListener("click", () => closePopup(popupAddCard))
buttonClosePhoto.addEventListener("click", () => closePopup(popupPhoto))
formElement.addEventListener("submit", handleSubmitProfileForm)
formAddCard.addEventListener("submit", handleSubmitCardForm)
