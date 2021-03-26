import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';
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
  inputPlace,
  inputLink,
  handleItems
 } from '../utils/constants.js';



// функция для создания карточки
// const createCard = item => {
//   const newCard = new Card(item, '.photo-template');
//   return newCard.generateCard();
// };

// initialCards.forEach(item => {
//     galery.append(createCard(item));
// });


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


// функция закрытия попапа клавишей Escape
// const closeByEscape = evt => {
//     if (evt.key === 'Escape') {
//         const popupTypeOpened = document.querySelector('.popup_opened');
//         if (popupTypeOpened) {
//             popupTypeOpened.classList.remove('popup_opened');
//         }
//     }
// };

// //функция открытия попапа
// const openPopup = popupEl => {
//     popupEl.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEscape);

// };
// //функция закрытия попапа
// const closePopup = popupEl => {
//     popupEl.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closeByEscape);
// };

// popups.forEach(popup => {
//     popup.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup);
//         }
//         if (evt.target.classList.contains('popup__close')) {
//             closePopup(popup);
//         }
//     });
// });


const popupProfOpen = new Popup('.popup_type_prof');

//слушатель с функцией открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла
popupProfOpenButton.addEventListener('click', () => {
  popupProfOpen.open();
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      popupProfOpen._handleEscClose();
    }
  });
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});


//функця для занесения введенных в поля ввода формы данных для отображения в профиле
const formSubmitHandlerPopupProf = evt => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    close(popupProf);
};

// // функция для добавления карточки
// const newCard = () => {
//     const inputPlace = placeInput.value;
//     const inputLink = linkInput.value;
//     galery.prepend(createCard({ name: inputPlace, link: inputLink }));
//     placeInput.value = '';
//     linkInput.value = '';
// };



//функция добавления новой карточки и закрытия попапа Place
const formSubmitHandlerPopupPlace = evt => {
    evt.preventDefault();
    getNewCard.renderItems();
    close(popupPlace);
};




formElementPfof.addEventListener('submit', formSubmitHandlerPopupProf);

formElementPlace.addEventListener('submit', formSubmitHandlerPopupPlace);



const placeFormValidator = new FormValidator(dataForm, formElementPlace);

placeFormValidator.enableValidation();

popupPlaceOpenButton.addEventListener('click', () => {

  open(popupPlace);
  placeFormValidator.clearValidation();
  formElementPlace.reset();
});

const profFormValidator = new FormValidator(dataForm, formElementPfof);

profFormValidator.enableValidation();

export {popupImage, popupImg, popupImgName};

