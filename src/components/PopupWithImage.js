import  { Popup } from './Popup.js';


 export class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super (popupSelector)
      this._image = this._popup.querySelector('.popup-foto__image');
      this._name = this._popup.querySelector('.popup-foto__caption');
    }
    open(name, link) {
      super.open ()
      this._image.src = link;
      this._name.textContent = name;
      this._image.alt = name;

      }
    }
  