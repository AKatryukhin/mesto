import { handleResponse } from "../utils/utils.js";
export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  getProfileInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
    }).then(handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }

  editProfile(data) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(handleResponse);
  }

  editAvatar(link) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(handleResponse);
  }

  addCard(data) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(handleResponse);
  }

  removeCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }

  addLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }

  removeLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }
}
