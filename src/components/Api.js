class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers
    this._baseUrl = baseUrl
  }
 
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status)
}
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then( this._checkResponse)
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards `, {
      headers: this._headers
    })
    .then( this._checkResponse)
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me `, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about })
    })
    .then( this._checkResponse)
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards `, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    .then( this._checkResponse)
  }


  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id} `, {
      method: "DELETE",
      headers: this._headers,

    })
    .then( this._checkResponse)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes `, {
      method: "DELETE",
      headers: this._headers,
    })
    .then( this._checkResponse)
  }
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes `, {
      method: "PUT",
      headers: this._headers,
    })
    .then( this._checkResponse)
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then( this._checkResponse)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: '1d40ba82-b695-4e24-8fd8-c7e66dc7565f',
    'Content-Type': 'application/json'
  }
});
