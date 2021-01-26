const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = popup.querySelector('.popup__close');

const togglePopup = function () {
  popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', togglePopup);

popupCloseButton.addEventListener('click', togglePopup);


