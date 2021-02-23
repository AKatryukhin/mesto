
const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.popup__save');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, submitButtonSelector);

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
      checkInputValidity(formSelector, inputSelector);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formSelector) => {
    //cлушатель для формы
    formSelector.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    //слушатели для филдсетов
    // const fieldsetList = Array.from(formSelector.querySelectorAll('.form__set'));
    // fieldsetList.forEach((fieldset) => {
    //   setEventListeners(fieldset);
    // });
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


function hasInvalidInput (inputList) {
  return inputList.some((inputSelector) => {
  return !inputSelector.validity.valid;
});
}

function toggleButtonState (inputList, submitButtonSelector) {
  if (hasInvalidInput(inputList)) {
    submitButtonSelector.classList.add('popup__save_inactive')
  } else {
    buttonElement.classList.remove('popup__save_inactive')
  }
}
