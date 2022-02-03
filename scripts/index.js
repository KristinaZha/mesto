const popupProfile = document.querySelector(".popup-profile")
const buttonClose = document.querySelector(".popup-profile__close-button")//
const profileButton = document.querySelector(".profile__edit-button")
const formElement = document.querySelector(".form")
const userName = document.querySelector(".profile__title")
const userText = document.querySelector(".profile__subtitle")
const userNameInput = document.querySelector(".form__input_name")
const formInputRole = document.querySelector(".form__input_role")
const popupAddCard = document.querySelector(".popup-add")
const buttonCloseAdd = document.querySelector(".popup-add__close-button")//
const popupPhoto = document.querySelector(".popup-foto")
// добавление карточки через form
const buttonAdd = document.querySelector(".profile__button")
const elementPic = document.querySelector(".element__pic")
const elementTitle = document.querySelector(".element__title")
const name = document.querySelector(".form__input_text")
const hrefPic = document.querySelector(".form__input_image")
const formAddCard = document.querySelector(".form-card")
const buttonSubmit = document.querySelector(".form__type-submit")
const popup = document.querySelectorAll('.popup')

//ф-я открытия попапа добавления картинки
function openPopupAddCard() {
  popupAddCard.classList.add("popup_opened")
  document.addEventListener('keydown', closePopupEscape);
};

//ф-я закрытия попапа картинки
function closePopupAddCard() {
  popupAddCard.classList.remove("popup_opened")
  document.removeEventListener('keydown', closePopupEscape);
}

//ф-я открытия попапа редактирования профайла
function openPopupProfile() {
  popupProfile.classList.add("popup_opened")
  userNameInput.value = userName.textContent
  formInputRole.value = userText.textContent
  document.addEventListener('keydown', closePopupEscape)

}
//ф-я закрытия попапа редактирования профайла
function closePopupProfile() {
  popupProfile.classList.remove("popup_opened")
  document.removeEventListener('keydown', closePopupEscape);

}
//ф-я закрытия попапов esc
function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    closePopupAddCard(document.querySelector('popup_opened'));
    closePopupProfile(document.querySelector('popup_opened'));
    closePopupPhoto(document.querySelector('popup_opened'));
  }
};
//ф-я закрытия при клике на оверлей
popup.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopupAddCard(document.querySelector('popup_opened'));
      closePopupProfile(document.querySelector('popup_opened'));
      closePopupPhoto(document.querySelector('popup_opened'));
    }
  })
})
//форма изменений профайла
function formSubmitHandler(evt) {
  evt.preventDefault()
  userName.textContent = userNameInput.value
  userText.textContent = formInputRole.value
  closePopupProfile()
}
//форма добавления картинки
function CardAddSubmitHandler(evt) {
  evt.preventDefault()
  const inputName = name.value
  const inputImage = hrefPic.value
  const newCard = createDomNode({ name: inputName, link: inputImage })
  elements.prepend(newCard);
  formAddCard.reset();
  closePopupAddCard();
}

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
const elements = document.querySelector(".elements")
const element = document.querySelector(".element")
const template = document.querySelector(".template")
const imagePopup = document.querySelector(".popup-foto__image")
const captionPopup = document.querySelector(".popup-foto__caption")
//динамическое добавление карточек на страницу тег template
const createDomNode = (item) => {
  const elementTemplate = template.content
    .querySelector(".element")
    .cloneNode(true)// клонирование всего содержимого элемента
  elementTemplate.querySelector(".element__pic").src = item.link// ссылка на картинку
  elementTemplate.querySelector(".element__title").textContent = item.name// имя из заголовка
  const buttonDeleteCard = elementTemplate.querySelector(".element__delete") //удаление карточки
  const buttonLike = elementTemplate.querySelector(".element__like") // лайк карточки
  function deleteCard() {//ф-я удаление карточки
    elementTemplate.remove()
  }
  function likeCard() {// ф-я лайк карточки
    buttonLike.classList.toggle("element__like-activ")
  }

  elementTemplate
    .querySelector(".element__pic")
    .addEventListener("click", function (evt) {// ф-я открытия попапа с картинкой
      popupPhoto.classList.add("popup_opened")
      document.addEventListener('keydown', closePopupEscape)
      imagePopup.src = item.link
      captionPopup.textContent = item.name
    })
  buttonLike.addEventListener("click", likeCard) //слушатель лайка
  buttonDeleteCard.addEventListener("click", deleteCard) //слушатель удаления карточки
  elementTemplate.prepend
  return elementTemplate
}

const result = initialCards.map((item) => {
  return createDomNode(item)
})
elements.append(...result)

const buttonClosePhoto = document.querySelector(".popup-foto__close-button") // кнопка закрытие попапа с  фото


//ф-я закрытия попапа с фото
function closePopupPhoto() {
  popupPhoto.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEscape);
}


// слушатели
buttonClosePhoto.addEventListener("click", closePopupPhoto)//
buttonCloseAdd.addEventListener("click", closePopupAddCard)//
profileButton.addEventListener("click", openPopupProfile)
buttonClose.addEventListener("click", closePopupProfile)//
formElement.addEventListener("submit", formSubmitHandler)
buttonAdd.addEventListener("click", openPopupAddCard)
formAddCard.addEventListener("submit", CardAddSubmitHandler)











