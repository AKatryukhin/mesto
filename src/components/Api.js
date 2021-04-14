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
  }).then(res => res.ok
    ? res.json()
    : Promise.reject(`Ошибка ${res.status}`));
  }


  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
          authorization: this._token,

      }
  }).then(res => res.ok
    ? res.json()
    : Promise.reject(`Ошибка ${res.status}`));
}


editProfile(data) {
  return fetch(`${this._address}/users/me`, {
  method: 'PATCH',
  headers: {
    authorization: this._token,
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    name: data.name,
    about: data.job
  })
})
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка ${res.status}`));
}


  addCard(data) {
      return fetch(`${this._address}/cards`, {
          method: 'POST',
          headers: {
              authorization: this._token,
              'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: data.name,
            link: data.link
          })
      })
          .then(res => res.ok
              ? res.json()
              : Promise.reject(`Ошибка ${res.status}`))
  }


  removeCard(id) {
      return fetch(`${this._address}/cards/${id}`, {
          method: 'DELETE',
          headers: {
              authorization: this._token
          }
      })
          .then(res => res.ok
              ? Promise.resolve('success')
              : Promise.reject(`Ошибка ${res.status}`))
  }


}

