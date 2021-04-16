import './index.css';
import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithAvatar from '../components/PopupWithAvatar.js';
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
  popupAvatarOpenButton,
  formElementAvatar,
  avatarImage,
  profName,
  profAbout
 } from '../utils/constants.js';


const openPpopupImage = new PopupWithImage('.popup_type_image');
const openPpopupConfirm = new PopupWithConfirm('.popup_type_confirm');
const profUserInfo = new UserInfo({ nameSelector: '.profile__name', professionSelector: '.profile__job' });
const userAvatarInfo = new UserInfo({ linkSelector: '.popup__input-avatar'});
const openUserAvatar = new PopupWithAvatar('.popup_type_avatar');

popupAvatarOpenButton.addEventListener('click', () => {
  openUserAvatar.open();
  avatarFormValidator.clearValidation();
  openUserAvatar.setEventListeners();
  openUserAvatar.setSubmitAction(() => {
    const linkAvatar = userAvatarInfo.getUserAvatar();
    openUserAvatar.renderLoading(true);
    api.editAvatar(linkAvatar)
      .then (res => {
        avatarImage.src = res.avatar;
      }
        )
      .catch(err => console.log(err));
      });
      openUserAvatar.renderLoading(false);
});





 const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '239868fa-70b9-49a6-a5c6-22cb2b6196e6'
 });

 let myProfileId;

  Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([ cardsArray, userData ]) => {
  myProfileId = userData._id;
  avatarImage.src = userData.avatar;
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
     },
     handleSetLike = (card) => {
   api.addLike(card.getId())
        .then((res) => {
          card.handleLike(res);
        })
        .catch(err => console.log('Ошибка добавления лайка'));
     },
     handleRemoveLike = (card) => {
      api.removeLike(card.getId())
      .then((res) => {
        card.handleLike(res);
      })
      .catch(err => console.log('Ошибка снятия лайка'));
     }
     ) => {
      const card = new Card({ name, link, likes, owner, _id },
        myProfileId,
        selector,
        handleCardClick,
        handleDelCard, handleSetLike, handleRemoveLike);

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
      openPopupProf.renderLoading(true);
      profUserInfo.setUserInfo({ name, job });

      api.editProfile({ name, job })
        .then (res => {
          profName.textContent = name;
          profAbout.textContent = job;
        })
        .catch(err => console.log(err))
        .finally(() => {
          openPopupProf.renderLoading(false);
        });
        }
      });


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
    // openPpopupPlace.renderLoading(true);
    api.addCard(data)
      .then ((data) => {
        const newCard = createCard(data, '.photo-template');
        defaultCardList.addItemPrepend(newCard);
      })
      .catch(err => console.log(err))
      // .finally(() => {
      //   openPpopupPlace.renderLoading(false);
      // });
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

const avatarFormValidator = new FormValidator(dataForm, formElementAvatar);

avatarFormValidator.enableValidation();


