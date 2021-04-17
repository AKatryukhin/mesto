export default class Card {
  constructor(
    { name, link, likes, owner, _id },
    currentUserId,
    selector,
    handleCardClick,
    handleDelCard,
    handleSetLike,
    handleRemoveLike
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDelCard = handleDelCard;
    this.currentUserId = currentUserId;
    this.userId = owner._id;
    this._likes = likes;
    this._myId = currentUserId;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    const photoElement = document
      .querySelector(this._selector)
      .content.querySelector(".photo")
      .cloneNode(true);

    return photoElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._like = this._element.querySelector(".photo__like");
    if (this.findMyLike()) {
      this._like.classList.add("photo__like_type_active");
    } else {
      this._like.classList.remove("photo__like_type_active");
    }
    const imageElement = this._element.querySelector(".photo__image");
    imageElement.src = this._link;
    imageElement.alt = `Картинка ${this._name}`;
    this._element.querySelector(".photo__name").textContent = this._name;
    this.checkLikes();
    this.handleDelCardVisible();
    return this._element;
  }

  handleDelCardVisible() {
    if (this.userId === this.currentUserId) {
      this._element
        .querySelector(".photo__trash")
        .classList.add("photo__trash_type_visible");
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".photo__trash")
      .addEventListener("click", () => {
        this._handleDelCard(this);
      });

    this._element
      .querySelector(".photo__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });

    this._element
      .querySelector(".photo__like")
      .addEventListener("click", () => {
        if (this.findMyLike()) {
          this._handleRemoveLike(this);
        } else {
          this._handleSetLike(this);
        }
      });
  }

  handleLike(data) {
    this._likes = data.likes;
    this.updateLikesView();
  }

  updateLikesView(data) {
    if (!this.findMyLike()) {
      this.checkLikes();
      this._like.classList.remove("photo__like_type_active");
    } else {
      this.checkLikes();
      this._like.classList.add("photo__like_type_active");
    }
  }

  findMyLike() {
    return this._likes.some((like) => like._id === this._myId);
  }

  checkLikes() {
    this._element.querySelector(
      ".photo__like-total"
    ).textContent = this._likes.length;
  }

  handleDel() {
    this._element.remove();
  }

  getId() {
    return this._id;
  }
}
