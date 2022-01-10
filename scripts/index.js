const popupElement = document.querySelector(".popup")
const buttonClose = document.querySelector(".popup__close-button")
const profileButton = document.querySelector(".profile__edit-button")
const formElement = document.querySelector(".form")
const userName = document.querySelector(".profile__title")
const userText = document.querySelector(".profile__subtitle")
const FormName = document.querySelector(".form__type_text_name")
const FormRole = document.querySelector(".form__type_text_role")
const elementAdd = document.querySelector(".popup-add")
const buttonCloseAdd = document.querySelector(".popup-add__close-button")
const popupFoto = document.querySelector(".popup-foto")
// добавление карточки через form
const buttonAdd = document.querySelector(".profile__button")
const elementPic = document.querySelector(".element__pic")
const elementTitle = document.querySelector(".element__title")
const name = document.querySelector(".form-add__type_text_name")
const hrefPic = document.querySelector(".form-add__type_text_role")
const cardAdd = document.querySelector(".form-add")
//ф-я открытия попапа добавления картинки
function openPopupAdd() {
  elementAdd.classList.add("popup-add_opened")
}
//ф-я закрытия попапа картинки
function closePopupAdd() {
  elementAdd.classList.remove("popup-add_opened")
}
//ф-я открытия попапа редактирования профайла
function openPopup() {
  popupElement.classList.add("popup_opened")
  FormName.value = userName.textContent
  FormRole.value = userText.textContent
}
//ф-я закрытия попапа редактирования профайла
function closePopup() {
  popupElement.classList.remove("popup_opened")
}
//форма изменений профайла
function formSubmitHandler(evt) {
  evt.preventDefault()
  userName.textContent = FormName.value
  userText.textContent = FormRole.value
  closePopup()
}
//форма добавления картинки
function formAddSubmitHandler(evt) {
  evt.preventDefault()
  const inputName = Name.value
  const inputImage = hrefPic.value
  const newCard = createDomNode({ name: inputName, link: inputImage })
  elements.prepend(newCard)
  closePopupAdd()
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
      popupFoto.classList.add("popup-foto_opened")
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

const fotoClose = document.querySelector(".popup-foto__close-button") // кнопка закрытие попапа с  фото
function closePopupFoto() {
  popupFoto.classList.remove("popup-foto_opened")
}
// слушатели
fotoClose.addEventListener("click", closePopupFoto)
buttonCloseAdd.addEventListener("click", closePopupAdd)
profileButton.addEventListener("click", openPopup)
buttonClose.addEventListener("click", closePopup)
formElement.addEventListener("submit", formSubmitHandler)
profileButton.addEventListener("click", openPopup)
buttonClose.addEventListener("click", closePopup)
buttonAdd.addEventListener("click", openPopupAdd)
cardAdd.addEventListener("submit", formAddSubmitHandler)
