import { ESC_KEYCODE } from '../utils/constants.js';
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleClose = this._handleEscClose.bind(this);
    this._save = this._popup.querySelector('.popup__save');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleClose);
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_KEYCODE) {
      if (this._popup.classList.contains('popup_opened')) {
        this.close();
      }
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._save.textContent = 'Сохранение...';
    } else {
      this._save.textContent = 'Сохранить';
    }
  }
}
