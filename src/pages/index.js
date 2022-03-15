import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
import { popupProfile, userName, userText, initialCards,popupPhoto, cardSelector, popupProfileForm,popupFormCard, buttonAdd ,userNameInput, formInputRole, profileButton,popupAddCard, } from '../components/utils/constants.js'
import './index.css';


//переменная валидации
const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__type-submit',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'error-message_visible',
  inactiveButtonClass: 'form__button_disabled'
}
const editFormValidator = new FormValidator(settings, popupProfileForm);
const addCardFormValidator = new FormValidator(settings, popupFormCard);


// редактирования профайла
const userInfo = new UserInfo({
  profileNameSelector: userName,
  profileProffSelector: userText
});

//попап открытия карточки
const popupImage = new PopupWithImage(popupPhoto);

//новая карточка
function newCard(item) {
  const card = new Card (item, cardSelector, handleCardClick);
   const cardElement = card.getCardElement();
  return cardElement;
  }
  //открытие попапа с картинкой
function handleCardClick(name, link) {
  popupImage.open(name, link);
}

//отрисовка карточек
const cardList = new Section({
  items: initialCards,
  renderer: (carditem) => {
    const creatCard = newCard(carditem);
    cardList.addItem(creatCard);
  },
  },'.elements');
    

//переменная отпраки данных редактирования карточки
const popupCard =  new PopupWithForm(popupAddCard, { handleFormSubmit: (formValue) => {
const creatCard = newCard(formValue);
cardList.addItem(creatCard);
 }
 });

//форма отпраквки изменений профайла
const popupChangeProfile = new PopupWithForm(popupProfile, {
  handleFormSubmit: (inputvalues) => {
    userInfo.setUserInfo(inputvalues.name, inputvalues.role);
    popupChangeProfile.close();
  }
});
//слушатели валидации
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
//
cardList.renderItems();

// слушатели popups
popupChangeProfile.setEventListeners();
popupImage.setEventListeners();
popupCard.setEventListeners();

profileButton.addEventListener('click', () =>{
  editFormValidator.disableSubmitButton();
  const userValues = userInfo.getUserInfo();
  userNameInput.value = userValues.name;
  formInputRole.value = userValues.proff;
  popupChangeProfile.open();
});

buttonAdd.addEventListener('click', () => {
  addCardFormValidator.disableSubmitButton();
  popupCard.open();
});

