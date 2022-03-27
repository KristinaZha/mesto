
export class Card {
  constructor(data, cardSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._template = document.querySelector(cardSelector).content.querySelector('.element');
    this._handleCardClick = handleCardClick;
    this._hadleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

  }
  _fillLike = () => {
    this._buttonLike.classList.add('element__like-activ');
  }
  _thinLike = () => {
    this._buttonLike.classList.remove('element__like-activ');
  }

  deleteCard = () => {
    this._card.remove();
  }

  _setEventListeners = () => {
    this._buttonLike.addEventListener('click', () => this._handleLikeClick(this._id));
    this._buttonDelete.addEventListener('click', () => this._hadleDeleteClick(this._id));
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
      this._likeCountElement()
    });

  }

  _fillCard = () => {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.element__title').textContent = this._name;
  }
  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);
    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
        this._likeCountElement.textContent = this._likes.length;

    if (this.isLiked()) {
      this._fillLike()
    } else {
      this._thinLike()
    }
  }

  getCardElement = () => {
    this._card = this._template.cloneNode(true);
    this._buttonLike = this._card.querySelector('.element__like');
    this._buttonDelete = this._card.querySelector('.element__delete');
    this._cardImage = this._card.querySelector('.element__pic');
    this._likeCountElement = this._card.querySelector('.element__like-count');

    if (this._ownerId !== this._userId) {
      this._buttonDelete.style.display = 'none'
    }
    this._fillCard();
    this._setEventListeners();
    this.setLikes(this._likes);

    return this._card;
  }
};


