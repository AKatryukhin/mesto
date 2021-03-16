import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//попап редактирования профиля
const popupProf = document.querySelector('.popup_type_prof');
//кнопка открытия попапа - редактирования профиля
const popupProfOpenButton = document.querySelector('.profile__edit');
// поле для отображения имени в профиле
const profileName = document.querySelector('.profile__name');
// поле для отображения "о себе" в профиле
const profileJob = document.querySelector('.profile__job');
// секция galery
const galery = document.querySelector('.galery');
//попап добавления новой карточки
const popupPlace = document.querySelector('.popup_type_place');
//кнопка открытия попапа - добавления новой карточки
const popupPlaceOpenButton = document.querySelector('.profile__add');

const forms = document.forms;
const formElementPfof = document.forms.profform;
// поле ввода "имени" в форме попап Prof
const nameInput = formElementPfof.elements.name;
//поле ввода "о себе" в форме попап Prof
const jobInput = formElementPfof.elements.job;

const formElementPlace = document.forms.placeform;
// поле ввода "названия места" в форме попап Place
const placeInput = formElementPlace.elements.place;
//поле ввода "о себе" в форме попап Place
const linkInput = formElementPlace.elements.link;



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const dataForm = [
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }

];

initialCards.forEach((item) => {
  const card = new Card(item, '.photo-template');
  const cardElement = card.generateCard();
  galery.append(cardElement);
  });

// функция закрытия попапа клавишей Escape
const closeByEscape = (evt) => {
  if(evt.key === 'Escape') {
    const popupTypeOpened = document.querySelector('.popup_opened');
    if(popupTypeOpened) {
    popupTypeOpened.classList.remove('popup_opened');
    }
  }
};

//функция открытия попапа
const openPopup = popupEl => {
    popupEl.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
};

//функция закрытия попапа
const closePopup = popupEl => {

    popupEl.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
};

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup);
        }
    });
});



// forms.forEach((form) => {
//   const validForm = new FormValidator(dataForm, form);
//    enableValidation();

// });

//функця для занесения введенных в поля ввода формы данных для отображения в профиле
const formSubmitHandlerPopupProf = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProf);
};

// функция для добавления карточки
const addNewPlace = () => {
    const inputPlace = placeInput.value;
    const inputLink = linkInput.value;
    const newPlace = new Card({name: inputPlace, link: inputLink}, '.photo-template');
    const newcardElement = newPlace.generateCard();
    galery.prepend(newcardElement);
    placeInput.value = '';
    linkInput.value = '';
};

//функция добавления новой карточки и закрытия попапа Place
const formSubmitHandlerPopupPlace = (evt) => {
    evt.preventDefault();
    addNewPlace();
    closePopup(popupPlace);
  };

//слушатель с функцией открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла
popupProfOpenButton.addEventListener('click', () => {
  openPopup(popupProf);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

formElementPfof.addEventListener('submit', formSubmitHandlerPopupProf);

popupPlaceOpenButton.addEventListener('click', () => {
  openPopup(popupPlace);
 });

formElementPlace.addEventListener('submit', formSubmitHandlerPopupPlace);



