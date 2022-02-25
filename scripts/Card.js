import { popupPhoto, openPopup, imagePopup, captionPopup } from './index.js'

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;

  }
  // копируется темплейт
  _getTemplate() {
    
    
const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
return cardElement;

  }

  getCardElement = () => {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.element__pic');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.element__title').textContent = this._name;
    this._setEventListeners();
    return this._card;
  }

  _likeCard = () => {
    this._card.querySelector('.element__like').classList.toggle('element__like-activ');
  }

  _deleteCard = () => {
    this._card.remove();
  }

  _previewPicture = () => {
    openPopup(popupPhoto);
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    captionPopup.textContent = this._name;
  }

  _setEventListeners = () => {
    this._card.querySelector('.element__like').addEventListener('click', this._likeCard);
    this._card.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    this._card.querySelector('.element__pic').addEventListener('click', this._previewPicture);
  }

}
export default Card;

