class FormValidator {
  constructor(data, form) {
    this._element = form;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
}

_showInputError(inputElement) {
  const _errorElement = this._element.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  _errorElement.textContent = inputElement.validationMessage;
  _errorElement.classList.add(this._errorClass);
}

_hideInputError(inputElement) {
  const _errorElement = this._element.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  _errorElement.classList.remove(this._errorClass);
  _errorElement.textContent = '';
}

_checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
  } else {
      this._hideInputError(inputElement);
  }
}

_setEventListeners() {
  this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));

  this._inputList.forEach((inputElement) => {
     const buttonElement = this._element.querySelector(this._submitButtonSelector);
//  проверяю состояние кнопки вначале
    this._toggleButtonState(inputElement, buttonElement);
    inputElement.addEventListener('input', () => {
    this._checkInputValidity(inputElement);
// проверяю состояние кнопки при изменении полей
    this._toggleButtonState(inputElement, buttonElement);

    });
  });
}

// метод включения.выключения кнопок после проверки инпутов на валидность
_toggleButtonState(inputElement, buttonElement) {
  if (!inputElement.validity.valid) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

enableValidation() {
  this._element.addEventListener('submit', (evt) => {
    evt.preventDefault();
});
  this._setEventListeners();
}
}

export {FormValidator};
