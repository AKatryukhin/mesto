//кнопка открытия попапа - редактирования профиля
export const popupProfOpenButton = document.querySelector('.profile__edit');
//кнопка открытия попапа - добавления новой карточки
export const popupPlaceOpenButton = document.querySelector('.profile__add');
// селектор секции вставки/отображения карточек
export const cardListSelector = '.galery';
// форма попапа редактирования профиля
export const formElementPfof = document.forms.profform;
// поле ввода "имени" в форме попап Prof
export const nameInput = formElementPfof.elements.name;
//поле ввода "о себе" в форме попап Prof
export const jobInput = formElementPfof.elements.about;
// форма попапа добавления карточки
export const formElementPlace = document.forms.placeform;
// форма попапа добавления аватара
export const formElementAvatar = document.forms.avatarform;
// image аватара
export const avatarImage = document.querySelector('.profile__image');

export const popupAvatarOpenButton = document.querySelector('.profile__avatar');

export const escapeKey = 'Escape';

export const dataForm = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
