import './index.css';
import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Popup from '../components/Popup.js';
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
 const openPpopupConfirm = new Popup('.popup_type_confirm');
 //функция создания новой карточки
const createCard = ({ name, link, likes }, selector,
  handleCardClick = (name, link) => {
  openPpopupImage.open(name, link);
  openPpopupImage.setEventListeners();
}, handleDelClick = () => {
  openPpopupConfirm.open();
  openPpopupConfirm.setEventListeners();
}) => {
  const card = new Card({ name, link, likes }, selector, handleCardClick, handleDelClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const defaultCardList = new Section({ renderer: (item) => {
  const defaultCard = createCard(item, '.photo-template');
  defaultCardList.addItem(defaultCard);
} }, cardListSelector);

api.getInitialCards()
  .then (res => {
  defaultCardList.renderItems(res);
})
  .catch(err => console.log(err));

const profUserInfo = new UserInfo({ nameSelector: '.profile__name', professionSelector: '.profile__job' });

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
  handleFormSubmit: ({ name, link }) => {
    api.addCard({ name, link })
      .then (({ name, link }) => {
        const newCard = createCard({ name, link },'.photo-template');
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


