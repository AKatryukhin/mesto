import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._cardSelector = cardSelector;

  }

  open() {
    super.open();
    this.popup.querySelector('.popup__image').src = this._link;
    this.popup.querySelector('.popup__image').alt = `Картинка ${this._name}`;
    this.popup.querySelector('.photo__name').textContent = this._name;
  }

}
