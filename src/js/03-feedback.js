import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
const formValues = {
  email: form.email.value,
  message: form.message.value,
};
const KEYS = 'feedback-form-state';


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

addLocalData();

function onFormSubmit(event) {
    event.preventDefault();
    const submittedData = {
    email: event.currentTarget.email.value,
    message: event.currentTarget.message.value,
  };

  if (submittedData.email === '' || submittedData.message === '') {
        return;
  }

  console.log(submittedData);

  localStorage.removeItem(KEYS);
  form.reset();
};

function onFormInput({ target: { name, value } }) {
  formValues[name] = value;
  localStorage.setItem(KEYS, JSON.stringify(formValues));
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(KEYS));

  if (!localData) return;

  if (localData.email) form.email.value = localData.email;
  if (localData.message) form.message.value = localData.message;
}
