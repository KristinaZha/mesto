
 export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
     this._template = document.querySelector(cardSelector).content.querySelector('.element');
    this._handleCardClick = handleCardClick;

  }
  
  getCardElement = () => {
    this._card = this._template.cloneNode(true);
    this._buttonLike = this._card.querySelector('.element__like');
    this._buttonDelete = this._card.querySelector('.element__delete');
    this._cardImage = this._card.querySelector('.element__pic');
    this._fillCard();
    this._setEventListeners();
    return this._card;
  }
_fillCard = () => {
  this._cardImage.src = this._link;
  this._cardImage.alt = this._name;
  this._card.querySelector('.element__title').textContent = this._name;
}
  _likeCard = () => {
    this._buttonLike.classList.toggle('element__like-activ');
  }

  _deleteCard = () => {
    this._card.remove();
  }

  
  _setEventListeners = () => {
    this._buttonLike.addEventListener('click', this._likeCard);
    this._buttonDelete .addEventListener('click', this._deleteCard);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
  });

}
};
