 export class UserInfo {
    constructor({profileNameSelector, profileProffSelector}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileProff = document.querySelector(profileProffSelector);

    }

    getUserInfo() {
       return {
           name: this._profileName.textContent,
           proff: this._profileProff.textContent 
       } 
    }
setUserInfo( name, proff) {
    this._profileName.textContent = name;
    this._profileProff.textContent = proff;

}
  }
 