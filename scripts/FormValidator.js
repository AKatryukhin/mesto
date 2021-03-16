class FormValidator {
  constructor(dataForm, selector) {
    this._selector = selector;
    this._formSelector = dataForm.formSelector;
    this._inputSelector = dataForm.inputSelector;
    this._submitButtonSelector = dataForm.submitButtonSelector;
    this._inactiveButtonClass = dataForm.inactiveButtonClass;
    this._inputErrorClass = dataForm.inputErrorClass;
    this._errorClass = dataForm.errorClass;
}

_showInputError(formElement, inputElement, errorMessage, _inputErrorClass, _errorClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
}

_hideInputError(formElement, inputElement, _inputErrorClass, _errorClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(_inputErrorClass);
  errorElement.classList.remove(_errorClass);
  errorElement.textContent = '';
}

_checkInputValidity(formElement, inputElement, _inputErrorClass, _errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, _inputErrorClass, _errorClass);
  }
}

_setEventListeners(formElement, _inputSelector, _submitButtonSelector,
  _inactiveButtonClass, _inputErrorClass, _errorClass) {
  const inputList = Array.from(formElement.querySelectorAll(_inputSelector));
  const buttonElement = formElement.querySelector(_submitButtonSelector);
 // проверяю состояние кнопки в начале
  toggleButtonState(inputList, buttonElement, _inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, _inputErrorClass, _errorClass);
// проверяю состояние кнопки при изменении полей
      toggleButtonState(inputList, buttonElement, _inactiveButtonClass);
    });
  });
}

enableValidation({_formSelector, _inputSelector, _submitButtonSelector,
  _inactiveButtonClass, _inputErrorClass, _errorClass}) {
 const formList = Array.from(document.querySelectorAll(_formSelector));
 formList.forEach((formElement) => {
 formElement.addEventListener('submit', (evt) => {
     evt.preventDefault();
 });
 setEventListeners(formElement, _inputSelector, _submitButtonSelector,
   _inactiveButtonClass, _inputErrorClass, _errorClass);
 });
}

// проверяет наличие невалидных инпутов
_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
}

// функция включения.выключения кнопок после проверки инпутов на валидность
_toggleButtonState(inputList, buttonElement, _inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(_inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(_inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

}




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



const validForm = new FormValidator(dataForm, formElementPfof);
console.log(validForm);






// //функция для отображения ошибки
// const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorClass);
// };

// //функция для скрытия ошибки
// const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };

// // функция для проверки на валидность инпутов
// const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
//   } else {
//     hideInputError(formElement, inputElement, inputErrorClass, errorClass);
//   }
// };

// // функция для установки слушателей проверки на валидность инпутов
// const setEventListeners = (formElement, inputSelector, submitButtonSelector,
//   inactiveButtonClass, inputErrorClass, errorClass) => {
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   const buttonElement = formElement.querySelector(submitButtonSelector);
//  // проверяю состояние кнопки в начале
//   toggleButtonState(inputList, buttonElement, inactiveButtonClass);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
// // проверяю состояние кнопки при изменении полей
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//     });
//   });
// };

// // функция, ответственная за включение валидации всех форм
// const enableValidation = ({formSelector, inputSelector, submitButtonSelector,
//   inactiveButtonClass, inputErrorClass, errorClass}) => {
//  const formList = Array.from(document.querySelectorAll(formSelector));
//  formList.forEach((formElement) => {
//  formElement.addEventListener('submit', (evt) => {
//      evt.preventDefault();
//  });
//  setEventListeners(formElement, inputSelector, submitButtonSelector,
//    inactiveButtonClass, inputErrorClass, errorClass);
//  });
// };

// // принимает на вход объект ключей и свойств для данного проекта
// enableValidation(
//  {
//    formSelector: '.popup__form',
//    inputSelector: '.popup__input',
//    submitButtonSelector: '.popup__save',
//    inactiveButtonClass: 'popup__save_inactive',
//    inputErrorClass: 'popup__input_type_error',
//    errorClass: 'popup__input-error_active'
//  }
// );

// // проверяет наличие невалидных инпутов
// function hasInvalidInput (inputList) {
//   return inputList.some((inputElement) => {
//   return !inputElement.validity.valid;
// });
// }

// // функция включения.выключения кнопок после проверки инпутов на валидность
// function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
//   if (hasInvalidInput(inputList)) {
//       buttonElement.classList.add(inactiveButtonClass);
//       buttonElement.setAttribute('disabled', true);
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// }

export {FormValidator};
