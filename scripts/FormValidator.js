class FormValidator {
  constructor(dataForm, form) {
    this._element = form;
    this._inputSelector = dataForm.inputSelector;
    this._submitButtonSelector = dataForm.submitButtonSelector;
    this._inactiveButtonClass = dataForm.inactiveButtonClass;
    this._inputErrorClass = dataForm.inputErrorClass;
    this._errorClass = dataForm.errorClass;
}

_showInputError() {
  const _errorElement = this._element.querySelector(`.${_inputElement.id}-error`);
  _inputElement.classList.add(this._inputErrorClass);
  _errorElement.textContent = _inputElement.validationMessage;
  _errorElement.classList.add(this._errorClass);
}

_hideInputError() {
  const _errorElement = this._element.querySelector(`.${_inputElement.id}-error`);
  _inputElement.classList.remove(this._inputErrorClass);
  _errorElement.classList.remove(this._errorClass);
  _errorElement.textContent = '';
}

_checkInputValidity() {
  if (!_inputElement.validity.valid) {
    this.showInputError();
  } else {
    this.hideInputError();
  }
}

_setEventListeners() {
  this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
  const _buttonElement = this._element.querySelector(this._submitButtonSelector);
 // проверяю состояние кнопки в начале
  this.toggleButtonState();

  this._inputList.forEach((_inputElement) => {
    _inputElement.addEventListener('input', () => {
      this.checkInputValidity();
// проверяю состояние кнопки при изменении полей
      this.toggleButtonState();
    });
  });
}

enableValidation() {
  this._element.addEventListener('submit', (evt) => {
     evt.preventDefault();
     this._setEventListeners();
});
}

// проверяет наличие невалидных инпутов
_hasInvalidInput() {
  return this._inputList.some((_inputElement) => {
  return !_inputElement.validity.valid;
});
}

// функция включения.выключения кнопок после проверки инпутов на валидность
_toggleButtonState() {
  if (_hasInvalidInput()) {
      _buttonElement.classList.add(this._inactiveButtonClass);
      _buttonElement.setAttribute('disabled', true);
  } else {
    _buttonElement.classList.remove(this._inactiveButtonClass);
    _buttonElement.removeAttribute('disabled');
  }
}

}

const dataForm = [
  {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }

];



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
