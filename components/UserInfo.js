export default class UserInfo {
  constructor({ name, profession }, containerSelector) {
    this._name = name;
    this._profession = profession;
    this._container = document.querySelector(containerSelector);
  }


getUserInfo() {
  return {
    name: this._name,
    profession: this._profession,
  };
}

setUserInfo() {
  const infoUser = this.getUserInfo();
  this._container.append(infoUser);
}
}
