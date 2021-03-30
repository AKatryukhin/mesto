import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

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

//функция создания новой секции перебором initialCards, созданием карточек для каждого элемента и вставкой в галерею
const getDefaultCard = new Section({ items: initialCards, renderer: (item) => {
  const card = new Card(item, '.photo-template');
  const cardElement = card.generateCard();
  getDefaultCard.addItem(cardElement);
} }, cardListSelector);

getDefaultCard.renderItems();

const profUserInfo = new UserInfo({ nameSelector: '.profile__name', professionSelector: '.profile__job' });

//функция открытия попапа - редактирования профиля и присваивания полям значений из инпутов
const openPopupProf = new PopupWithForm({
    popupSelector:'.popup_type_prof',
    handleFormSubmit: (formData) => {

     profUserInfo.setUserInfo({ name: formData.name, job: formData.job });
    }
  }
);

//слушатель с функцией открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла
popupProfOpenButton.addEventListener('click', () => {
  openPopupProf.open();
  openPopupProf.setEventListeners();
  const getdDataUser = profUserInfo.getUserInfo();
  nameInput.value = getdDataUser.name;
  jobInput.value = getdDataUser.profession;
  // nameInput.value = profileName.textContent;
  // jobInput.value = profileJob.textContent;
});

// popupProfOpenButton.addEventListener('click', () => {
//   openPopupProf.open();
//   openPopupProf.setEventListeners();
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// });

//функция открытия попапа - добавления новой карточки используя formData из _getInputValues()
const openPpopupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: (formData) => {
    // console.log(formData);
    const card = new Card({name: placeInput.value, link: linkInput.value }, '.photo-template');
    const cardElement = card.generateCard();
    getDefaultCard.addNewItem(cardElement);
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

export const handleCardClick = (name, link) => {
  const openPpopupImage = new PopupWithImage('.popup_type_image');
  openPpopupImage.open(name, link);
  openPpopupImage.setEventListeners();
};

const placeFormValidator = new FormValidator(dataForm, formElementPlace);

placeFormValidator.enableValidation();

const profFormValidator = new FormValidator(dataForm, formElementPfof);

profFormValidator.enableValidation();

export {popupImage, popupImg, popupImgName};

