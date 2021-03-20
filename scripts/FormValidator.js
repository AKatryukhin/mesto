export default class FormValidator {
  constructor(data, form) {
      this._element = form;
      this._inputSelector = data.inputSelector;
      this._submitButtonSelector = data.submitButtonSelector;
      this._inactiveButtonClass = data.inactiveButtonClass;
      this._inputErrorClass = data.inputErrorClass;
      this._errorClass = data.errorClass;
      this._inputList = [...this._element.querySelectorAll(this._inputSelector)];
      this._buttonElement = this._element.querySelector(this._submitButtonSelector);
    }

  _showInputError(inputElement) {
      const _errorElement = this._element.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      _errorElement.textContent = inputElement.validationMessage;
      _errorElement.classList.add(this._errorClass);
  }

  clearValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      });
      this.disableSubmitButton();
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
      this._inputList.forEach((inputElement) => {
          //  проверяю состояние кнопки вначале
             this._toggleButtonState();

          inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
            // проверяю состояние кнопки при изменении полей
              this._toggleButtonState();
          });
      });
  }

  // метод включения.выключения кнопок после проверки инпутов на валидность

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  // метод отключения кнопки
  disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  // метод включения кнопки
  _enableSubmitButton() {
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }

  // проверяет наличие невалидных инпутов
  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  }

  enableValidation() {
    this._element.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListeners();
    }
  }


