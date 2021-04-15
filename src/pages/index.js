import './index.css';
import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  dataForm,
  nameInput,
  jobInput,
  formElementPfof,
  formElementPlace,
  popupPlaceOpenButton,
  popupProfOpenButton,
  cardListSelector,
 } from '../utils/constants.js';


const openPpopupImage = new PopupWithImage('.popup_type_image');
const openPpopupConfirm = new PopupWithConfirm('.popup_type_confirm');
const profUserInfo = new UserInfo({ nameSelector: '.profile__name', professionSelector: '.profile__job' });

 const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '239868fa-70b9-49a6-a5c6-22cb2b6196e6'
 });

 let myProfileId;

  Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([ cardsArray, userData ]) => {
  myProfileId = userData._id;
  profUserInfo.setUserInfo(userData);
  defaultCardList.renderItems(cardsArray);
  })
  .catch((err) => {
    console.log(err);
  });

//функция создания новой карточки
const createCard = ({ name, link, likes, owner, _id }, selector,
  handleCardClick = (name, link) => {
     openPpopupImage.open(name, link);
     openPpopupImage.setEventListeners();
     }, handleDelCard = (card) => {
       openPpopupConfirm.open();
       openPpopupConfirm.setEventListeners();
       openPpopupConfirm.setSubmitAction(() => {
         api.removeCard(card.getId())
           .then(() => card.handleDel())
           .catch(err => console.log('Ошибка при удалении'));
       });
      }) => {
       const card = new Card({ name, link, likes, owner, _id },
         myProfileId,
         selector,
         handleCardClick,
         handleDelCard);
         return card.generateCard();

 };


const defaultCardList = new Section({ renderer: (item) => {
  const defaultCard = createCard(item, '.photo-template');
  defaultCardList.addItem(defaultCard);
} }, cardListSelector);


//функция открытия попапа - редактирования профиля и присваивания полям значений из полученных инпутов
const openPopupProf = new PopupWithForm({
    popupSelector:'.popup_type_prof',
    handleFormSubmit: ({ name, job }) => {
      profUserInfo.setUserInfo({ name, job });
      api.editProfile({ name, job })
        .then (res => { name, job })
        .catch(err => console.log(err));
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
  handleFormSubmit: (data) => {
    api.addCard(data)
      .then ((data) => {
        const newCard = createCard(data, '.photo-template');
        defaultCardList.addItemPrepend(newCard);
      })
      .catch(err => console.log(err));
      }
  });

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


