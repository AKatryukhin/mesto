import {openPopup, popupImage, popupImg, popupImgName} from './index.js';
class Card {
  constructor(data, selector) {
      this._name = data.name;
      this._link = data.link;
      this._selector = selector;
  }

  _getTemplate() {
      const _photoEl = document.querySelector(this._selector)
      .content.querySelector('.photo').cloneNode(true);

      return _photoEl;
  }

  generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      const imageElement = this._element.querySelector('.photo__image');
      imageElement.src = this._link;
      imageElement.alt = `Картинка ${this._name}`;
      this._element.querySelector('.photo__name').textContent = this._name;

      return this._element;
  }

  _setEventListeners() {
      this._element.querySelector('.photo__like').addEventListener('click', () => {
          this._handleLike();
      });

      this._element.querySelector('.photo__trash').addEventListener('click', () => {
          this._handleDel();
      });

      this._element.querySelector('.photo__image').addEventListener('click', () => {
          openPopup(popupImage);
          popupImg.src = this._link;
          popupImg.alt = `Картинка ${this._name}`;
          popupImgName.textContent = this._name;
      });
  }

  _handleLike() {
      this._element.querySelector('.photo__like').classList.toggle('photo__like_type_active');
  }

  _handleDel() {
      this._element.remove();
  }
}

export { Card };
