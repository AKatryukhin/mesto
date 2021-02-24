const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector,
  inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
 // проверяю состояние кнопки в начале
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
// проверяю состояние кнопки при изменении полей
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector,
  inactiveButtonClass, inputErrorClass, errorClass}) => {
 const formList = Array.from(document.querySelectorAll(formSelector));
 formList.forEach((formElement) => {
 formElement.addEventListener('submit', (evt) => {
     evt.preventDefault();
 });
 setEventListeners(formElement, inputSelector, submitButtonSelector,
   inactiveButtonClass, inputErrorClass, errorClass);
 });
};

enableValidation(
 {
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__save',
   inactiveButtonClass: 'popup__save_inactive',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input-error_active'
 }
);

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
}

function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}
