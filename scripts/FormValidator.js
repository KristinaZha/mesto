class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;
        this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._button = this._form.querySelector(this._settings.submitButtonSelector);
    }


    //показывает ошибку
    _showError(input, validationMessage) {
        const errorContainer = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._settings.inputErrorClass);
        errorContainer.classList.add(this._settings.errorClass);
        errorContainer.textContent = validationMessage;
    };

    //скрывает ошибку
    _hideError(input) {
        const errorContainer = this._form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._settings.inputErrorClass);
        errorContainer.classList.remove(this._settings.errorClass);
        errorContainer.textContent = '';
    };

    //валидация инпута
    _validateInput(input) {
        if (input.validity.valid) {
            this._hideError(input);
        }
        else {
            this._showError(input, input.validationMessage);
        }
    };

    _isFormValid() {
        return this._inputs.some((input) => {
            return !input.validity.valid;
        });
    }

    // блокировка кнопки
    disableSubmitButton() {
        this._button.classList.add(this._settings.inactiveButtonClass);
        this._button.setAttribute('disabled', '');
    }

    _enableSubmitButton() {
        this._button.classList.remove(this._settings.inactiveButtonClass);
        this._button.removeAttribute('disabled');
    }

    //переключение кнопки
    _toggleButton() {
        if (this._isFormValid()) {
            this.disableSubmitButton();
        }
        else {
            this._enableSubmitButton();
        }
    };

    _setEventListeners() {
        this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector))
        this._button = this._form.querySelector(this._settings.submitButtonSelector);
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._validateInput(input);
                this._toggleButton();
            });
        });
    }
    //освановная валидация
    enableValidation() {
        this.disableSubmitButton();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();

    }
};
export default FormValidator;


