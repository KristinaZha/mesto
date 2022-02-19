import Card from './Card.js';
import FormValidator from './FormValidator.js';


const popup = document.querySelectorAll(".popup")
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
export function openPopup(popup) {
  popup.classList.add("popup_opened")
  document.addEventListener("keydown", closePopupEscape)
}

// ф-я закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopupEscape)
}


//ф-я закрытия попапов esc
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"))
  }
};

//форма добавления картинки
function handleSubmitCardForm(evt) {
  evt.preventDefault()
  const inputName = name.value
  const inputImage = hrefPic.value
  renderCard({ name: inputName, link: inputImage });
  //?
  closePopup(popupAddCard)
  formAddCard.reset()
}
//перебор
popup.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup_opened")) {
      closePopup(popup)
    }
    if (e.target.classList.contains("popup__close-button")) {
      closePopup(popup)
    }
  })
});
function openAddCardModal() {

  openPopup(popupAddCard)
};
buttonAdd.addEventListener('click', openAddCardModal)


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
const renderCard = (data) => {
  const card = new Card(data);
  const cardElement = card.getCardElement();
  document.querySelector('.elements').prepend(cardElement);

};

initialCards.forEach(renderCard);

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

editFormValidator.enableValidation();

addCardFormValidator.enableValidation();



// слушатели профайла

profileButton.addEventListener("click", () => openPopup(popupProfile))

buttonClose.addEventListener("click", () => closePopup(popupProfile))

profileButton.addEventListener("click", openProfile)

// слушатели добавления картинки

buttonAdd.addEventListener("click", () => openPopup(popupAddCard))

buttonCloseAdd.addEventListener("click", () => closePopup(popupAddCard))

buttonClosePhoto.addEventListener("click", () => closePopup(popupPhoto))

formElement.addEventListener("submit", handleSubmitProfileForm)
formAddCard.addEventListener("submit", handleSubmitCardForm)
