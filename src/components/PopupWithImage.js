import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(".popup__image");
    this._popupName = this._popup.querySelector(".popup__name-image");
  }

  open(name, link) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupName.textContent = name;
    super.open();
  }
}
