import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

const KEYS = 'feedback-form-state';

addLocalData();

const formValues = {
  email: form.email.value,
  message: form.message.value,
};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput({ target: { name, value } }) {
  formValues[name] = value;
  localStorage.setItem(KEYS, JSON.stringify(formValues));
}

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
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(KEYS));

  if (!localData) return;

  if (localData.email) form.email.value = localData.email;
  if (localData.message) form.message.value = localData.message;
}
