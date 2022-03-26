import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';
import { ConfirmationPopup } from '../components/PopupWithConfirmation.js';
import {
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
  from '../components/utils/constants.js'
import { api } from '../components/Api.js';
import './index.css';


let userId;

Promise.all([api.getProfile(), api.getCards()])
.then(([res, cards]) => {
  userInfo.setUserInfo(res.name, res.about, res.avatar);
  userId = res._id;
  cards.forEach(data => {
    
    const card = newCard(data);
    cardList.addItem(card);
  });

})
.catch(err => {
  console.log(err)
})


// редактирования профайла
const userInfo = new UserInfo({
  profileNameSelector: userName,
  profileProffSelector: userText,
  profileAvatarSelector: avatarImage
});

//попап открытия карточки
const popupImage = new PopupWithImage(popupPhoto);

//новая карточка
function newCard(data) {
  const card = new Card(
    {
      name: data.name,
      link: data.link,
      likes: data.likes,
      _id: data._id,
      userId: userId,
      ownerId: data.owner._id
    },
    cardSelector,
    handleCardClick,
    (id) => {
      deletePopup.open();
      deletePopup.handleFormSubmit(() => {
        api.deleteCard(id)
          .then(() => {
            card.deleteCard(id);
            deletePopup.close();
          })
          .catch(res => {
            console.log(res)
          })
      })
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch(console.log)
      } else {
        api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch(console.log)
      }
    }
  );
  const cardElement = card.getCardElement();
  return cardElement;
}
//открытие попапа с картинкой
function handleCardClick(name, link) {
  popupImage.open(name, link);
}

//отрисовка карточек
const cardList = new Section({
 items:[],
  renderer: (cardItem) => {
    const creatCard = newCard(cardItem);
    cardList.addItem(creatCard);
  },
}, '.elements');


//переменная отпраки данных редактирования карточки
const popupCard = new PopupWithForm(popupAddCard, {
  handleFormSubmit: (data) => {
    addCardFormValidator.loading(true);
    api.addCard(data.name, data.href)
      .then(res => {
        const creatCard = newCard(res);
        cardList.addItem(creatCard);
        popupCard.close();
      })
      .catch(console.log)
      .finally(() => {
        addCardFormValidator.loading(false)
      })
  }
});

//форма отпраквки изменений профайла
const popupChangeProfile = new PopupWithForm(popupProfile, {
  handleFormSubmit: (data) => {
    editFormValidator.loading(true);
    const { name, role} = data;
    api.editProfile(name, role)
      .then(res => {
        userInfo.setUserInfo(name, role, res.avatar);
        popupChangeProfile.close();
      })
      .catch(console.log)
      .finally(() => {
        editFormValidator.loading(false)
      })
  }
});
//popup question
const deletePopup = new ConfirmationPopup(popupQuestion);

//popup change avatar
const popupChangeAvatar = new PopupWithForm(popupAvatar, {
  handleFormSubmit: (img) => {
    editFormValidatorAvatar.loading(true);
    const  { avatar }= img ;
    api.changeAvatar(avatar)
      .then(res => {
        console.log(res)
        userInfo.setUserInfo(res.name, res.about, res.avatar);
        popupChangeAvatar.close();
      })
      .catch(console.log)
      .finally(() => {
        editFormValidatorAvatar.loading(false);
      })
  }
})

const editFormValidator = new FormValidator(settings, popupProfileForm);
const addCardFormValidator = new FormValidator(settings, popupFormCard);
const editFormValidatorAvatar = new FormValidator(settings, popupFormAvatar);
//слушатели валидации
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editFormValidatorAvatar.enableValidation();
// рендер катрочек
cardList.renderItems();

// слушатели popups
popupChangeProfile.setEventListeners();
popupImage.setEventListeners();
popupCard.setEventListeners();
popupChangeAvatar.setEventListeners();
deletePopup.setEventListeners();

//слушатели профайла
profileButton.addEventListener('click', () => {
  editFormValidator.disableSubmitButton();
  const userValues = userInfo.getUserInfo();
  userNameInput.value = userValues.name;
  formInputRole.value = userValues.proff;
  popupChangeProfile.open();
});
// слушатели  добавления карточек
buttonAdd.addEventListener('click', () => {
  addCardFormValidator.disableSubmitButton();
  popupCard.open();
});

// слушатели сменгы аватара

openButtonAvatar.addEventListener('click', () => {
  editFormValidatorAvatar.disableSubmitButton();
  popupChangeAvatar.open();
})