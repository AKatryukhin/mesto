import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  dataForm,
  nameInput,
  jobInput,
  formElementPfof,
  formElementPlace,
  popupPlaceOpenButton,
  popupProfOpenButton,
  cardListSelector,
 } from '../utils/constants.js';

//функция создания новой секции перебором initialCards, созданием карточек для каждого элемента и вставкой в галерею
const getDefaultCard = new Section({ items: initialCards, renderer: (item) => {
  const card = new Card(item, '.photo-template');
  const cardElement = card.generateCard();
  getDefaultCard.addItem(cardElement);
} }, cardListSelector);

getDefaultCard.renderItems();

const profUserInfo = new UserInfo({ nameSelector: '.profile__name', professionSelector: '.profile__job' });

//функция открытия попапа - редактирования профиля и присваивания полям значений из полученных инпутов
const openPopupProf = new PopupWithForm({
    popupSelector:'.popup_type_prof',
    handleFormSubmit: (formData) => {
      // console.log(formData);
      profUserInfo.setUserInfo({ name: formData.name, job: formData.job });
    }
  }
);
openPopupProf.setEventListeners();

//слушатель с функцией открытия попапа - редактирования профиля и присваивания инпутам значений из профайла
popupProfOpenButton.addEventListener('click', () => {
  openPopupProf.open();
  const getDataUser = profUserInfo.getUserInfo();
  nameInput.value = getDataUser.name;
  jobInput.value = getDataUser.profession;
});

//функция открытия попапа - добавления новой карточки используя formData из _getInputValues()
const openPpopupPlace = new PopupWithForm({
  popupSelector: '.popup_type_place',
  handleFormSubmit: (formData) => {
    const card = new Card({name: formData.place, link: formData.link }, '.photo-template');
    const cardElement = card.generateCard();
    getDefaultCard.addNewItem(cardElement);
  }
}
);
openPpopupPlace.setEventListeners();

//слушатель с функцией открытия попапа добавления карточки
popupPlaceOpenButton.addEventListener('click', () => {
  openPpopupPlace.open();
  placeFormValidator.clearValidation();
  formElementPlace.reset();
});

// функция открытия попапа с картинкой при клике
export const handleCardClick = (name, link) => {
  const openPpopupImage = new PopupWithImage('.popup_type_image');
  openPpopupImage.open(name, link);
  openPpopupImage.setEventListeners();
};

const placeFormValidator = new FormValidator(dataForm, formElementPlace);

placeFormValidator.enableValidation();

const profFormValidator = new FormValidator(dataForm, formElementPfof);

profFormValidator.enableValidation();


