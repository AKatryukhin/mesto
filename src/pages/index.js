import './index.css';
import Card from '../components/Сard.js';
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

 //функция создания новой карточки
 const createCard = (item, selector) => {
  const card = new Card(item, selector);
  const cardElement = card.generateCard();
  return cardElement;
};


//функция создания новой секции перебором initialCards, созданием карточек для каждого элемента и вставкой в галерею
const defaultCardList = new Section({ items: initialCards, renderer: (item) => {
  const defaultCard = createCard(item, '.photo-template');
  defaultCardList.addItem(defaultCard);
} }, cardListSelector);

defaultCardList.renderItems();

const profUserInfo = new UserInfo({ nameSelector: '.profile__name', professionSelector: '.profile__job' });

//функция открытия попапа - редактирования профиля и присваивания полям значений из полученных инпутов
const openPopupProf = new PopupWithForm({
    popupSelector:'.popup_type_prof',
    handleFormSubmit: ({ name, job }) => {
      profUserInfo.setUserInfo({ name, job });
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
  handleFormSubmit: ({ name, link }) => {
    const newCard = createCard( { name, link }, '.photo-template');
    defaultCardList.addNewItem(newCard);
  }
}
);
openPpopupPlace.setEventListeners();

//слушатель с функцией открытия попапа добавления карточки
popupPlaceOpenButton.addEventListener('click', () => {
  openPpopupPlace.open();
  placeFormValidator.clearValidation();
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


