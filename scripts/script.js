const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = popup.querySelector('.popup__close');

let togglePopup = function () {
  popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', togglePopup);

popupCloseButton.addEventListener('click', togglePopup);

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input-name');
const jobInput = formElement.querySelector('.popup__input-job');

let formSubmitHandler = function(evt) {
  evt.preventDefault();
  const ProfileName =  document.querySelector('.profile__name');
  const ProfileJob =  document.querySelector('.profile__job');
  ProfileName.textContent = nameInput.value;
  ProfileJob.textContent = jobInput.value;
  togglePopup();
};

formElement.addEventListener('submit', formSubmitHandler);



/*const likeButton = document.querySelector('.photo__like');

let toggleLikeButton = function (evt) {
  likeButton.classList.toggle('photo__like_type_disabled');
  likeButton.classList.toggle('photo__like_type_active');

}

likeButton.addEventListener('click',toggleLikeButton);
*/


