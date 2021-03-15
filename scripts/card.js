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
    this._element.querySelector('.photo__image').src = this._link;
    this._element.querySelector('.photo__image').alt = `Картинка ${this._name}`;
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
      this._openPopupImage();

      });
  }

  _handleLike() {
    this._element.querySelector('.photo__like').classList.toggle('photo__like_type_active');
  }

  _handleDel() {
    this._element.remove();
  }

  _openPopupImage () {
    popupImage.classList.add('popup_opened');
    popupImage.querySelector('.popup__image').src = this._link;
    popupImage.querySelector('.popup__image').alt = `Картинка ${this._name}`;
    popupImage.querySelector('.popup__name-image').textContent = this._name;
    document.addEventListener('keydown', closeByEscape);
  }

}


const popupImage = document.querySelector('.popup_type_image');

const closeByEscape = (evt) => {
  if(evt.key === 'Escape') {
    const popupTypeOpened = document.querySelector('.popup_opened');
    popupTypeOpened.classList.remove('popup_opened');
  }
};

export {Card};
