import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  }


setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    this._handleFormSubmit(this._getInputValues());
    this.close();

    });
}

_getInputValues() {
  this._inputList = this._form.querySelectorAll('.popup__input');
  this._formValues = {};
  this._inputList.forEach(input => {
  this._formValues[input.name] = input.value;
  // console.log(this._formValues);
  return this._formValues;

  });

  // Данные берешь из _getInputValues, все верно. Эту функцию лучше сделать универсальной,
  //  чтобы она получала массив инпутов на форме и формировала из них объект, в котором имя свойство
  //   - input.name, а значение свойства - это input.value, тогда у тебя получится, что то типа такого
  //    ({name: имя картинки, link: путь к картинке)

  return this._formValues;
}

close() {
  super.close();
  this._form.reset();
}
}
