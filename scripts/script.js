const popupProf = document.querySelector('.popup_type_prof'); //нашел попап редактирования профиля
const popupProfOpenButton = document.querySelector('.profile__edit'); //нашел кнопку открытия попапа - редактирования профиля
const popupProfCloseButton = popupProf.querySelector('.popup__close'); // нашел кнопку закрытия попапа редактирования профиля
const formElementPfof = popupProf.querySelector('.popup__form'); // нашел форму попапа
const nameInput = formElementPfof.querySelector('.popup__input_type_name'); // нашел поле ввода имени в форме попап Prof
const jobInput = formElementPfof.querySelector('.popup__input_type_descr'); //нашел поле ввода "о себе" в форме попап Prof
const profileName = document.querySelector('.profile__name'); // нашел поле для отображения имени в профиле
const profileJob = document.querySelector('.profile__job'); // нашел поле для отображения "о себе" в профиле
const galery = document.querySelector('.galery'); // нашел секцию galery
const popupPlace = document.querySelector('.popup_type_place'); //нашел попап добавления нового места
const popupPlaceOpenButton = document.querySelector('.profile__add'); //нашел кнопку открытия попапа - добавления нового места
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close'); // нашел кнопку закрытия попапа добавления нового места
const formElementPlace = popupPlace.querySelector('.popup__form'); // нашел кнопку Создать попапа Place
const placeInput = formElementPlace.querySelector('.popup__input_type_name'); // нашел поле ввода названия места в форме попап Place
const linkInput = formElementPlace.querySelector('.popup__input_type_descr'); //нашел поле ввода "о себе" в форме попап Place


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

const render = () => {
  const cloneArr = initialCards
      .map(getPhotoEl);

  galery.append(...cloneArr);
};

const getPhotoEl = item => {

  const templatePhoto = document.querySelector('#photo').content; // нашел элемент photo
  const photoEl = templatePhoto.querySelector('.photo').cloneNode(true);
  const itemLink = photoEl.querySelector('.photo__image');
  itemLink.src = item.link;
  itemLink.alt = `Картинка ${item.name}`;
  const itemName = photoEl.querySelector('.photo__name');
  itemName.textContent = item.name;

  const buttonLike = photoEl.querySelector('.photo__like'); // нашел кнопку для лайков
  buttonLike.addEventListener('click', handleLike); // добавил слушателя кнопке Лайков

  const buttonDel = photoEl.querySelector('.photo__trash'); // нашел кнопку для удаления
  buttonDel.addEventListener('click', handleDel); // добавил слушателя кнопке удаления

  return photoEl;
  }; // создал переменную с функцией добавления фото из стороннего массива


const  handleLike = event => {
  const targetEl = event.target;
  targetEl.classList.toggle('photo__like_type_active');
};

const handleDel = event => {
  const targetElement = event.target;
  const targetItem = targetElement.closest('.photo');
  targetItem.remove();
};

const openPopup = popupEl => {
    popupEl.classList.add('popup-opened');

}; // создал переменную с функцией открытия попапа

const closePopup = popupEl => {
    popupEl.classList.remove('popup-opened');
}; //создал переменную с функцией закрытия попапа

const formSubmitHandlerPopupProf = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProf);
}; //создал переменную с функцией, которая заносит введенные в поля ввода формы данных в профиль

const addNewPlace = () => {
    const inputPlace = placeInput.value;
    const inputLink = linkInput.value;
    const newPlace = getPhotoEl({ name: inputPlace, link: inputLink});
    galery.prepend(newPlace);
    placeInput.value = '';
    linkInput.value = '';
};

const formSubmitHandlerPopupPlace = (evt) => {
    evt.preventDefault();
    addNewPlace();
    closePopup(popupPlace);
  }; //создал переменную для формы с функцией добавления новой карточки и закрытия попапа Place


popupProfOpenButton.addEventListener('click', () => {
  openPopup(popupProf);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}); // добавил слушателя кнопке открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла

popupProfCloseButton.addEventListener('click', () => {
 closePopup(popupProf);
}); // добавил слушателя кнопке закрытия попапа профиля

formElementPfof.addEventListener('submit', formSubmitHandlerPopupProf); // добавил слушателя отправке формы Prof

popupPlaceOpenButton.addEventListener('click', () => {
  openPopup(popupPlace);
 });

popupPlaceCloseButton.addEventListener('click', () => {
  closePopup(popupPlace);
}); // добавил слушателя кнопке закрытия попапа добавления нового места

formElementPlace.addEventListener('submit', formSubmitHandlerPopupPlace); // добавил слушателя отправке формы Place

render ();
