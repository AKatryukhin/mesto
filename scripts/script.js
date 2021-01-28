let popup = document.querySelector(".popup"); //нашел попап
let popupOpenButton = document.querySelector(".profile__edit"); //нашел кнопку открытия попапа - редактирования профиля
let popupCloseButton = popup.querySelector(".popup__close"); // нашел кнопку закрытия попапа
let formElement = document.querySelector(".popup__form"); // нашел форму попапа
let nameInput = formElement.querySelector(".popup__input_type_name"); // нашел поле ввода имени в форме попап
let jobInput = formElement.querySelector(".popup__input_type_job"); //нашел поле ввода "о себе" в форме попап
let profileName = document.querySelector(".profile__name"); // нашел поле для отображения имени в профиле
let profileJob = document.querySelector(".profile__job"); // нашел поле для отображения "о себе" в профиле

let openPopup = function () {
    popup.classList.add("popup_opened");
}; // создал переменную с функцией открытия попапа

let closePopup = function () {
    popup.classList.remove("popup_opened");
}; //создал переменную с функцией закрытия попапа

let formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}; //создал переменную с функцией, которая заносит введенные в поля ввода формы данных в профиль

popupOpenButton.addEventListener("click", openPopup); // добавил слушателя кнопке открытия попапа - редактирования профиля
popupCloseButton.addEventListener("click", closePopup); // добавил слушателя кнопке закрытия попапа
formElement.addEventListener("submit", formSubmitHandler); // добавил слушателя отправке формы

/*const likeButton = document.querySelectorAll('.photo__like');

let toggleLikeButton = function (evt) {
  likeButton.classList.toggle('photo__like_type_disabled');
  likeButton.classList.toggle('photo__like_type_active');

}

likeButton.addEventListener('click',toggleLikeButton);
*/
