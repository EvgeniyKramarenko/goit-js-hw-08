import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector(".feedback-form textarea");
const formData = {};

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500))

onPopulateMessageOutput()

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

function onTextareaInput(event) {
    const message = event.target.value
    localStorage.setItem('feedback-form-state', message);
};

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    console.log(formData);
})

function onPopulateMessageOutput() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    if (savedMessage) {
        console.log(savedMessage);
        textarea.value = savedMessage;
    }
}
