export default class Card {
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
    this._element.querySelector('.photo__image').src = this._link;
    this._element.querySelector('.photo__image').alt = `Картинка ${this._name}`;
    this._element.querySelector('.photo__name').textContent = this._name;

    return this._element;
}

}

