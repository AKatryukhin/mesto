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
      openPopupImage();
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

const popupImage = document.querySelector('.popup_type_image');
const popupImg = popupImage.querySelector('.popup__image');
const popupImgName = popupImage.querySelector('.popup__name-image');

 // функция открытия попапа PopupImage
 const openPopupImage = (item) => {
  openPopup(popupImage);
};

//функция открытия попапа
const openPopup = popupEl => {
  popupEl.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

//функция закрытия попапа
const closePopup = popupEl => {

  popupEl.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => {
  if(evt.key === 'Escape') {
    const popupTypeOpened = document.querySelector('.popup_opened');
    popupTypeOpened.classList.remove('popup_opened');
  }
};

export {Card};
