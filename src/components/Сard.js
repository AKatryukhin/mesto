import {handleCardClick} from '../pages/index.js';
export default class Card {
  constructor({ name, link }, selector, handleCardClick) {
      this._name = name;
      this._link = link;
      this._selector = selector;
      this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
      const photoElement = document.querySelector(this._selector)
      .content.querySelector('.photo').cloneNode(true);

      return photoElement;
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
         handleCardClick(this._name, this._link);

      });
  }

  _handleLike() {
      this._element.querySelector('.photo__like').classList.toggle('photo__like_type_active');
  }

  _handleDel() {
      this._element.remove();
  }
}

