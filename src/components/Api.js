export default class Api {
  constructor({address, token}) {
      this._address = address;
      this._token = token;
  }

  getProfileInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
          authorization: this._token,
          'Content-type': 'application/json'
      }
  }).then(response => response.ok
    ? response.json()
    : Promise.reject(`Ошибка ${response.status}`));
  }


  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
          authorization: this._token
      }
  }).then(response => response.ok
    ? response.json()
    : Promise.reject(`Ошибка ${response.status}`));
}
}


