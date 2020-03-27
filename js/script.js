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
checkEmail = input => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (re.test(String(input.value.trim()).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, `Enter a valid email to continue`);
  }
}

//Check required fields
checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldLabel(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Length checker
checkLength = (input, min, max) => {
  if(input.value.trim().length < min) {
    showError(input, `${getFieldLabel(input)} must be at least ${min}`)
  } else if(input.value.trim().length > max) {
    showError(input, `${getFieldLabel(input)} must be at most ${max}`)
  } else {
    showSuccess(input);
  }
}

//Check passwords match

checkPasswordsMatch = (input1, input2) => {
  let password1 = input1.value;
  let password2 = input2.value;

  if(password1 !== password2) {
    showError(input2, 'Passwords do not match');
  } else {
    showSuccess(input2)
  }
}

//Get Field Label
getFieldLabel = input => {
  return input.previousElementSibling.textContent;
}


//Submit Event Linstener
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 4, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

});