export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this.popup = document.querySelector(popupSelector);
    this.submitForm = submitForm;
  }
}

setEventListeners() {
  super.setEventListeners();
  submitForm.addEventListener('submit', () => {

  });

}

_getInputValues() {

}


}

close() {
  super.close();
  // Form.reset
}
