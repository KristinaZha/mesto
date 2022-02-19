import { popupPhoto, openPopup, imagePopup, captionPopup } from './index.js'


class Card {
  constructor(data, cardElement) {
    this._name = data.name;
    this._link = data.link;
    this._cardElement = cardElement;
  }

  _getTemplate() {
    const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
    return cardElement
  }

  getCardElement = () => {
    this._card = this._getTemplate();
    this._setEventListeners();
    this._card.querySelector('.element__pic').src = this._link;
    this._card.querySelector('.element__title').textContent = this._name;
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
    captionPopup.textContent = this._name;
  }

  _setEventListeners = () => {
    this._card.querySelector('.element__like').addEventListener('click', this._likeCard);
    this._card.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    this._card.querySelector('.element__pic').addEventListener('click', this._previewPicture);
  }

}
export default Card;

