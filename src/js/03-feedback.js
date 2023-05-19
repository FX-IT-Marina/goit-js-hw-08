import throttle from 'lodash.throttle';

// Step 1 - Refs

const feedbackFormData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
//  Step 2 - Add constanta

const STORAGE_KEY = 'feedback-form-state';

// Step 3 - addEventListener

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener(
  'input',
  throttle(event => {
    feedbackFormData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
  }, 500)
);
//  Step 4 - Function check availability
populateTextarea();

// Step 5 - Function form submit

function onFormSubmit(event) {
  event.preventDefault();
  //   console.log('Send form');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(feedbackFormData);
}

// Step 6 - get value from textarea and email

// function onTextreaInput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);
    refs.textarea.value = parsedMessage.message;
    refs.email.value = parsedMessage.email;
  }
}
