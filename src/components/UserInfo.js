 export class UserInfo {
    constructor({profileNameSelector, profileProffSelector, profileAvatarSelector}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileProff = document.querySelector(profileProffSelector);
        this._avatarProff = document.querySelector(profileAvatarSelector);

    }

    getUserInfo() {
       return {
           name: this._profileName.textContent,
           proff: this._profileProff.textContent 
       } 
    }
setUserInfo( name, proff, avatar) {
    this._profileName.textContent = name;
    this._profileProff.textContent = proff;
    this._avatarProff.src = avatar;

}
  }
 