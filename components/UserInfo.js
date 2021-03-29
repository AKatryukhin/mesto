export default class UserInfo {
  constructor({ nameSelector, professionSelector }, containerSelector) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._container = document.querySelector(containerSelector);
  }


getUserInfo() {
  return {
    name: this._name.textContent,
    profession: this._profession.textContent,
  };
}

setUserInfo() {
  const infoUser = this.getUserInfo();
  this._container.append(infoUser);
}
}
