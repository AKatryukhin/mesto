const popupProf = document.querySelector('.popupProf'); //нашел попап редактирования профиля
const popupProfOpenButton = document.querySelector('.profile__edit'); //нашел кнопку открытия попапа - редактирования профиля
const popupProfCloseButton = popupProf.querySelector('.popupProf__close'); // нашел кнопку закрытия попапа
const formElement = document.querySelector('.popupProf__form'); // нашел форму попапа
const nameInput = formElement.querySelector('.popupProf__input_type_name'); // нашел поле ввода имени в форме попап
const jobInput = formElement.querySelector('.popupProf__input_type_job'); //нашел поле ввода "о себе" в форме попап
const profileName = document.querySelector('.profile__name'); // нашел поле для отображения имени в профиле
const profileJob = document.querySelector('.profile__job'); // нашел поле для отображения "о себе" в профиле
const galery = document.querySelector('.galery'); // нашел секцию galery

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

const openPopup = (popupEl) => {
    popupEl.classList.add('popup_opened');

}; // создал переменную с функцией открытия попапа

const closePopup = (popupEl) => {
    popupEl.classList.remove('popup_opened');
}; //создал переменную с функцией закрытия попапа

const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProf);
}; //создал переменную с функцией, которая заносит введенные в поля ввода формы данных в профиль

popupProfOpenButton.addEventListener('click', () => {
  openPopup(popupProf);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}); // добавил слушателя кнопке открытия попапа - редактирования профиля и присваивания инпутам значений  из профайла
popupProfCloseButton.addEventListener('click', () => {
  closePopup(popupProf);
}); // добавил слушателя кнопке закрытия попапа профиля
formElement.addEventListener('submit', formSubmitHandler); // добавил слушателя отправке формы


function getPhotoEl (item) {

const templatePhoto = document.querySelector('#photo').content; // нашел элемент photo
const photoEl = templatePhoto.querySelector('.photo').cloneNode(true);
photoEl.querySelector('.photo__image').src = item.link;
photoEl.querySelector('.photo__image').alt = `Картинка ${item.name}`;
photoEl.querySelector('.photo__name').textContent = item.name;
galery.append(photoEl);
};

const getPhoto = initialCards.forEach(getPhotoEl);
