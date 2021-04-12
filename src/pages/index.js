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
  profileName,
  profileAbout,
  profileAvatar
 } from '../utils/constants.js';

 const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '239868fa-70b9-49a6-a5c6-22cb2b6196e6'
 });

 api.getProfileInfo()
    .then((res) => {
      profileName.textContent = res.name;
      profileAbout.textContent = res.about;
      profileAvatar.src = res.avatar;
 })
.catch((err) => {
    console.log(err);
  });





 const openPpopupImage = new PopupWithImage('.popup_type_image');

 //функция создания новой карточки
 const createCard = ({ name, link }, selector,
  handleCardClick = (name, link) => {
  openPpopupImage.open(name, link);
  openPpopupImage.setEventListeners();
}) => {
  const card = new Card({ name, link }, selector, handleCardClick);
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
    const newCard = createCard({ name, link },'.photo-template');
  defaultCardList.addItemPrepend(newCard);
  }
}
);
openPpopupPlace.setEventListeners();

//слушатель с функцией открытия попапа добавления карточки
popupPlaceOpenButton.addEventListener('click', () => {
  openPpopupPlace.open();
  placeFormValidator.clearValidation();
});

const placeFormValidator = new FormValidator(dataForm, formElementPlace);

placeFormValidator.enableValidation();

const profFormValidator = new FormValidator(dataForm, formElementPfof);

profFormValidator.enableValidation();


