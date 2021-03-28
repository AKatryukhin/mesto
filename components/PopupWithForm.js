export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.form = this.popup.querySelector('.popup__form');
    this.handleFormSubmit = handleFormSubmit;
  }
}

setEventListeners() {
  super.setEventListeners();
  this.form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    this._handleFormSubmit(this._getInputValues());

    });
}

_getInputValues() {
  this._inputList = this.form.querySelectorAll('.form__input');
  this._formValues = {};
  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });

  return this._formValues;
}

close() {
  super.close();
  this.form.reset();
}
