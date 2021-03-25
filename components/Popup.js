export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

open() {
  this.popup.classList.add('popup_opened');
  // document.addEventListener('keydown', _handleEscClose());
}

close() {
  this.popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', _handleEscClose());
}

_handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const popupTypeOpened = document.querySelector('.popup_opened');
    if (popupTypeOpened) {
        popupTypeOpened.classList.remove('popup_opened');
    }
}
}

setEventListeners() {
  this.popup.addEventListener('click', evt => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
    if (evt.target.classList.contains('popup__close')) {
      this.close();
    }
  });
}

}

