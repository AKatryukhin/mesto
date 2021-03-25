
import Card from '../components/Card.js';

export default class Section {
  constructor({ data }, containerSelector) {
    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
  }


renderItems() {
  this._initialArray.forEach((item) => {
    const card = new Card(item, '.photo-template');
    const cardElement = card.generateCard();
    this.setItem(cardElement);
  });
}

setItem(element) {
  this._container.append(element)
}
}
