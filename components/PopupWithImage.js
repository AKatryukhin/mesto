import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open();
    popupImg.src = this._link;
    popupImg.alt = `Картинка ${this._name}`;
    popupImgName.textContent = this._name;

  }

}
