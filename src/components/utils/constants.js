export {
  popupProfile,
  userName,
  userText,
  popupPhoto, 
  cardSelector, 
  popupProfileForm, 
  popupFormCard, 
  buttonAdd, 
  userNameInput, 
  formInputRole, 
  profileButton, 
  popupAddCard,
  popupAvatar,
  avatarImage,
  popupFormAvatar,
  linkAvatar,
  openButtonAvatar,
  popupQuestion,
  settings
}
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

//попап смена аватара
const popupAvatar = '.popup-avatar';
const avatarImage = '.profile__avatar';
const popupFormAvatar = document.querySelector('.form-avatar');
const linkAvatar = popupFormAvatar.querySelector('.form__input_avatar');
const openButtonAvatar = document.querySelector('.profile__avatar-button');

// попап удаление
const popupQuestion = '.popup-delete';
//template
const cardSelector = '.template';

//переменная валидации
const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__type-submit',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'error-message_visible',
  inactiveButtonClass: 'form__button_disabled'
}