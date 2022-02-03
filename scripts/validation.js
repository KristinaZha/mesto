
//ф-я отмена стандартного поведения
function submitForm(event) {
    event.preventDefault();

}
// ф-я показывает ошибку
function showError(input, errorContainer, { inputErrorClass, errorClass }) {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorClass);
    errorContainer.textContent = input.validationMessage;
};
//скрывает ошибку
function hideError(input, errorContainer, { inputErrorClass, errorClass }) {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorClass);
    errorContainer.textContent = '';
};

// переключение кнопки
function toggleButton(form, { submitButtonSelector, inactiveButtonClass }) {
    const button = form.querySelector(submitButtonSelector);
    const isFormValid = form.checkValidity();


    if (isFormValid) {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute('disabled');

    } else {

        button.classList.add(inactiveButtonClass);
        button.setAttribute('disabled', '');
    }
};
// валидация импутов
function validateInput(form, input, classes) {
    const errorContainer = form.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
        hideError(input, errorContainer, classes);

    }
    else {
        showError(input, errorContainer, classes);
    }
    toggleButton(form, classes);

};

// общая валидация
function enableValidation({ formSelector, inputSelector, ...rest }) {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', submitForm);

        const inputs = form.querySelectorAll(inputSelector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                validateInput(form, input, rest);
            });
        });
        toggleButton(form, rest);
    });
};

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__type-submit',
    inputErrorClass: 'form__text_type_error',
    errorClass: 'error-message_visible',
    inactiveButtonClass: 'form__button_disabled'

});









