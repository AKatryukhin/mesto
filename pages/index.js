import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';
// import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import {
  initialCards,
  dataForm,
  galery,
  nameInput,
  jobInput,
  popups,
  profileName,
  profileJob,
  placeInput,
  linkInput,
  formElementPfof,
  formElementPlace,
  popupPlaceOpenButton,
  popupProfOpenButton,
  popupProf,
  popupPlace,
  popupImage,
  popupImg,
  popupImgName,
  cardListSelector,
  popupProfSelector,
  popupImageSelector,
  inputPlace,
  inputLink,
  handleItems
 } from '../utils/constants.js';


const getDefaultCard = new Section({ items: initialCards, renderer: (item) => {
  const card = new Card(item, '.photo-template');
  const cardElement = card.generateCard();
  getDefaultCard.addItem(cardElement);
} }, cardListSelector);

getDefaultCard.renderItems();

// const getNewCard = new Section({ items: { inputPlace, inputLink}, renderer: (item) => {
//   const inputPlace = placeInput.value;
//   const inputLink = linkInput.value;
//   const card = new Card(item, '.photo-template');
//   const cardElement = card.generateCard();
//   getNewCard.addNewItem(cardElement);
//   placeInput.value = '';
//   linkInput.value = '';

// } },  cardListSelector);


// const getDefaultCard = new Section({ data: items, renderer: (item) => {
//   const card = new Card(item, '.photo-template');
//   const cardElement = card.generateCard();
//   getDefaultCard.addItem(cardElement);
// } },  cardListSelector);

//слушатель с функцией открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла
// popupProfOpenButton.addEventListener('click', () => {
//   popupProfOpen.open();
//   popupProfOpen.setEventListeners();
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// });

const openPopupProf = new PopupWithForm({
    popupSelector: '.popup_type_prof',
    handleFormSubmit: (formData) => {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    }
  }
);


popupProfOpenButton.addEventListener('click', () => {
  openPopupProf.open();
  openPopupProf.setEventListeners();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

const openPpopupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: (formData) => {

  }
}
);

//слушатель с функцией открытия попапа -Place
popupPlaceOpenButton.addEventListener('click', () => {
  openPpopupPlace.open();
  openPpopupPlace.setEventListeners();
  placeFormValidator.clearValidation();
  formElementPlace.reset();
});

//функця для занесения введенных в поля ввода формы данных для отображения в профиле
// const formSubmitHandlerPopupProf = evt => {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     close(pProf);
// };


// // функция для добавления карточки
// const newCard = () => {
//     const inputPlace = placeInput.value;
//     const inputLink = linkInput.value;
//     galery.prepend(createCard({ name: inputPlace, link: inputLink }));
//     placeInput.value = '';
//     linkInput.value = '';
// };

// const openPopupWithImage = new PopupWithImage(
// { popupSelector: '.popup_type_image',
//   handleFormSubmit: (formData) => {
//     // this.popup.querySelector('.popup__image').src = this._link;
//     // this.popup.querySelector('.popup__image').alt = `Картинка ${this._name}`;
//     // this.popup.querySelector('.photo__name').textContent = this._name;

//   }
// });

// const handleCardClick = () => {

// };

//функция добавления новой карточки и закрытия попапа Place
const formSubmitHandlerPopupPlace = evt => {
    evt.preventDefault();
    getNewCard.renderItems();
    close(popupPlace);
};


// formElementPfof.addEventListener('submit', formSubmitHandlerPopupProf);

formElementPlace.addEventListener('submit', formSubmitHandlerPopupPlace);



const placeFormValidator = new FormValidator(dataForm, formElementPlace);

placeFormValidator.enableValidation();



const profFormValidator = new FormValidator(dataForm, formElementPfof);

profFormValidator.enableValidation();

export {popupImage, popupImg, popupImgName};

