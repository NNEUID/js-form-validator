const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show error message fo input
showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  formControl.classList.remove('success');
  const small = formControl.querySelector('small');
  small.textContent = message;
}

//Show success outline for input
showSuccess = input => {
  const formControl = input.parentElement;
  formControl.classList.add('success');
  formControl.classList.remove('error');
}

// Check email validity
isEmailValid = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Submit Event Linstener
form.addEventListener('submit', e => {
  e.preventDefault();

  if (username.value.trim() === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value.trim() === '') {
    showError(email, 'Email is required');
  } else if (!isEmailValid(email.value.trim())) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value.trim() === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value.trim() === '') {
    showError(password2, 'Confirm password is required');
  } else {
    showSuccess(password2);
  }
});