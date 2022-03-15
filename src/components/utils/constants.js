export{ popupProfile, userName, userText, initialCards,popupPhoto, cardSelector, popupProfileForm,popupFormCard,buttonAdd ,userNameInput, formInputRole, profileButton,popupAddCard, }
//переменные для редактирования данных
const popupProfile = ".popup-profile";
const userName = ".profile__title";
const userText = '.profile__subtitle';
const popupProfileForm = document.querySelector('.form-profile')
const userNameInput = popupProfileForm.querySelector(".form__input_name")
const formInputRole = popupProfileForm.querySelector(".form__input_role")
const profileButton = document.querySelector(".profile__edit-button")


//переменные для добавления карточек

const popupAddCard = ".popup-add";
const popupFormCard = document.querySelector('.form-card');
const buttonAdd = document.querySelector(".profile__button");
//переменные для попап с картинкой
const popupPhoto = ".popup-foto";

//template
const cardSelector = '.template';
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
