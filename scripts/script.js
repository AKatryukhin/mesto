const popup = document.querySelector('.popup'); //нашел попап
const popupOpenButton = document.querySelector('.profile__edit'); //нашел кнопку открытия попапа - редактирования профиля
const popupCloseButton = popup.querySelector('.popup__close'); // нашел кнопку закрытия попапа
const formElement = document.querySelector('.popup__form'); // нашел форму попапа
const nameInput = formElement.querySelector('.popup__input_type_name'); // нашел поле ввода имени в форме попап
const jobInput = formElement.querySelector('.popup__input_type_job'); //нашел поле ввода "о себе" в форме попап
const profileName = document.querySelector('.profile__name'); // нашел поле для отображения имени в профиле
const profileJob = document.querySelector('.profile__job'); // нашел поле для отображения "о себе" в профиле

const openPopup = function () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}; // создал переменную с функцией открытия попапа и присваивания инпутам значений  из профайла

const closePopup = function () {
    popup.classList.remove('popup_opened');
}; //создал переменную с функцией закрытия попапа

const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}; //создал переменную с функцией, которая заносит введенные в поля ввода формы данных в профиль

popupOpenButton.addEventListener('click', openPopup); // добавил слушателя кнопке открытия попапа - редактирования профиля
popupCloseButton.addEventListener('click', closePopup); // добавил слушателя кнопке закрытия попапа
formElement.addEventListener('submit', formSubmitHandler); // добавил слушателя отправке формы

