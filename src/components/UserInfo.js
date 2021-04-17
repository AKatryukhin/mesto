export default class UserInfo {
  constructor({ nameSelector, professionSelector, linkSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._link = document.querySelector(linkSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._profession.textContent = about;
  }

  getUserAvatar() {
    return this._link.value;
  }
}
