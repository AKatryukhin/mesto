export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

open() {
  this.popup.classList.add('popup_opened');
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      this._handleEscClose();
    }
  });
}

close() {
  this.popup.classList.remove('popup_opened');
}

_handleEscClose() {
  const popupTypeOpened = document.querySelector('.popup_opened');
    if (popupTypeOpened) {
        popupTypeOpened.classList.remove('popup_opened');
    }
}

setEventListeners() {
  this.popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
    if (evt.target.classList.contains('popup__close')) {
      this.close();
    }
  });
}

}

