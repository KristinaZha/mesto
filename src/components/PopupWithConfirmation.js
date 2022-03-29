import { Popup } from '../components/Popup.js'

export class ConfirmationPopup extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
    }
    changeFormSubmitHandler(newSubmitHandler) {
        this.handleFormSubmit = newSubmitHandler;
}

    setEventListeners() {
        super.setEventListeners();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleFormSubmit();
         
        })
    }
}