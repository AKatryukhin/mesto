let popup = document.querySelector(".popup");
let popupOpenButton = document.querySelector(".profile__edit");
let popupCloseButton = popup.querySelector(".popup__close");

let togglePopup = function () {
    popup.classList.toggle("popup_opened");
};

popupOpenButton.addEventListener("click", togglePopup);

popupCloseButton.addEventListener("click", togglePopup);

let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input-name");
let jobInput = formElement.querySelector(".popup__input-job");

let formSubmitHandler = function (evt) {
    evt.preventDefault();
    let ProfileName = document.querySelector(".profile__name");
    let ProfileJob = document.querySelector(".profile__job");
    ProfileName.textContent = nameInput.value;
    ProfileJob.textContent = jobInput.value;
    togglePopup();
};

formElement.addEventListener("submit", formSubmitHandler);

/*const likeButton = document.querySelectorAll('.photo__like');

let toggleLikeButton = function (evt) {
  likeButton.classList.toggle('photo__like_type_disabled');
  likeButton.classList.toggle('photo__like_type_active');

}

likeButton.addEventListener('click',toggleLikeButton);
*/


