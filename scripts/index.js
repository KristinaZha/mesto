const popupElement = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const profileButton = document.querySelector(".profile__edit-button");
let formElement = document.querySelector(".form");
let userName = document.querySelector(".profile__title");
let userText = document.querySelector(".profile__subtitle");
let FormName = document.querySelector(".form__type_text_name");
let FormRole = document.querySelector(".form__type_text_role");
const addElement = document.querySelector(".popup-add");
const closeButtonAdd = document.querySelector(".popup-add__close-button");

function openPopupAdd() {
  addElement.classList.add("popup-add_opened");
 
}
function closePopupAdd() {
  addElement.classList.remove("popup-add_opened");

}

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

closeButtonAdd.addEventListener("click", closePopupAdd)
profileButton.addEventListener("click", openPopup)
closeButton.addEventListener("click", closePopup)
formElement.addEventListener("submit", formSubmitHandler)


// массив 
const initialCards = [
  
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elements = document.querySelector('.elements');
const element = document.querySelector('.element');
const template = document.querySelector('.template'); 
//динамическое добавление карточек на страницу тег template
const createDomNode = (item) => {
  const elementTemplate = template.content.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__pic').src = item.link;
  elementTemplate.querySelector('.element__title').textContent = item.name;
  return elementTemplate;
}
const result = initialCards.map((item) => {
  return createDomNode(item);
});
elements.append(...result);
const buttonDeleteCard = elementTemplate.querySelector(".element__delete");
const buttonLike = elementTemplate.querySelector(".element__like");
function deleteCard() {
  elementTemplate.remove();
  }
buttonDeleteCard.addEventListener(".click", deleteCard);
function likeCard() {
  buttonLike.classList.toggle(".element__like-activ");
}
buttonLike.addEventListener("click", likeCard)
// добавление карточки через form
const buttonAdd = document.querySelector(".profile__button");
let elementPic = document.querySelector(".element__pic");
let elementTitle = document.querySelector(".element__title");
let Name = document.querySelector(".form-add__type_text_name");
let hrefPic = document.querySelector(".form-add__type_text_role");
let addCard = document.querySelector(".form-add");
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const inputName = Name.value;
  const inputImage = hrefPic.src;
  const newCard = createDomNode({name:inputName, link:hrefPic});
  elements.prepend(newCard);
  closePopupAdd();
}

buttonAdd.addEventListener("click", openPopupAdd)
addCard.addEventListener("submit", formAddSubmitHandler)




