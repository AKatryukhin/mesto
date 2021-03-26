//попап редактирования профиля
export const popupProf = document.querySelector('.popup_type_prof');
export const popupProfSelector = '.popup_type_prof';
//кнопка открытия попапа - редактирования профиля
export const popupProfOpenButton = document.querySelector('.profile__edit');
// поле для отображения имени в профиле
export const profileName = document.querySelector('.profile__name');
// поле для отображения "о себе" в профиле
export const profileJob = document.querySelector('.profile__job');
// секция galery
export const galery = document.querySelector('.galery');

export const cardListSelector = '.galery';
//попап добавления новой карточки
export const popupPlace = '.popup_type_place';
//кнопка открытия попапа - добавления новой карточки
export const popupPlaceOpenButton = document.querySelector('.profile__add');
export const formElementPfof = document.forms.profform;
// поле ввода "имени" в форме попап Prof
export const nameInput = formElementPfof.elements.name;
//поле ввода "о себе" в форме попап Prof
export const jobInput = formElementPfof.elements.job;

export const formElementPlace = document.forms.placeform;
// поле ввода "названия места" в форме попап Place
export const placeInput = formElementPlace.elements.place;
// //поле ввода "о себе" в форме попап Place
export const linkInput = formElementPlace.elements.link;
export const popups = document.querySelectorAll('.popup');
export const inputPlace = placeInput.value;
export const inputLink = linkInput.value;
export const popupImage = document.querySelector('.popup_type_image');
export const popupImageSelector = '.popup_type_image';
export const popupImg = popupImage.querySelector('.popup__image');
export const popupImgName = popupImage.querySelector('.popup__name-image');

export const handleItems = {
  name: inputPlace,
  link: inputLink };

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    },
];

export const dataForm = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
};
