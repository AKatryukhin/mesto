export default class UserInfo {
  constructor({ nameSelector, professionSelector, linkSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._link = document.querySelector(linkSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {
    if (name) {
      this._name.textContent = name;
    }
    if(about)   {
      this._profession.textContent = about;
    }
    if(avatar) {
    this._avatar.src = avatar;
    }
  }

  getUserAvatar() {
    return this._link.value;
  }
}
