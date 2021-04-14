
export default class Card {
  constructor({ name, link, likes, owner},currentUserId, selector, handleCardClick, handleDelCard) {
      this._name = name;
      this._link = link;
      this._selector = selector;
      this._handleCardClick = handleCardClick;
      this.handleDelCard = handleDelCard;
      this.like = likes.length;
      this.currentUserId = currentUserId;
      this.userId = owner._id;
  }

  _getTemplate() {
      const photoElement = document.querySelector(this._selector)
      .content.querySelector('.photo').cloneNode(true);

      return photoElement;
  }

  generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      const imageElement = this._element.querySelector('.photo__image');
      imageElement.src = this._link;
      imageElement.alt = `Картинка ${this._name}`;
      this._element.querySelector('.photo__name').textContent = this._name;
      this.checkLikes();
      this.handleDelCardVisible();
      return this._element;
  }

  handleDelCardVisible() {
    if(this.userId === this.currentUserId) {
    this._element.querySelector('.photo__trash').classList.add('photo__trash_type_visible');
    }
  }


  checkLikes() {
    this._element.querySelector('.photo__like-total').textContent = this.like;
  }

  _setEventListeners() {
      this._element.querySelector('.photo__like').addEventListener('click', () => {
          this._handleLike();
      });

      this._element.querySelector('.photo__trash').addEventListener('click', () => {
        this.handleDelCard();
      });

      this._element.querySelector('.photo__image').addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });

  }

  _handleLike() {
      this._element.querySelector('.photo__like').classList.toggle('photo__like_type_active');
  }

  handleDel() {
      this._element.remove();
  }

  getId() {
    return this._id;
}

}


