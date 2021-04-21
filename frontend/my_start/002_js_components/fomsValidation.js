function showErrorMsg(elem, text) {
  const parent = elem.parent(),
        tmp = `<span>${text}</span>`;

  parent.addClass(errorClass);
  parent.find('span').remove();

  if(text !== undefined) {
    parent.append(tmp);
  }
};

function hideErrorMsg(elem) {
  const parent = elem.parent();
  parent.removeClass(errorClass);
  parent.find('span').remove();
};

const errorMessage = {
  empty: 'Обязательное поле',
  userLogin: 'Логин не найден',
  email: 'Некорректный e-mail',
  userEmail: 'E-mail не найден',
  userPassword: 'Неверный пароль ',
  regPassword: 'Пароль должен содержать не менее 8 символов, включая буквы и цифры. Пароль слишком распространен.',
  regConfirmPassword: 'Пароли не совпадают',
  regConfirmEmail: 'E-mail не совпадает',
  rulesAgree: 'Подтвердите, что ознакомлены с документами',
  captcha: 'Подтвердите, что вы не робот',
};

const defaultMessage = {
  loading: 'Loading...',
  success: 'Спасибо!',
  erorr: 'Что-то пошло не так...'
};

const regExpMail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      // regExpNumber = new RegExp(/^[0-9]+$/);

// check inputs
function checkLogin(form) {
  const login = form.find('input[name="name"]'),
        loginValue = login.val().trim();

  let loginError = true;

  if (loginValue === '') {
    showErrorMsg(login, 'Обязательное поле');
  } else if (nameValue.length > 19) {
    showErrorMsg(login, 'Слишком длинное имя');
  } else {
    hideErrorMsg(login);
    loginError = false;
  }

  if (loginError) {
    return false;
  } else {
    return true;
  }
};

function checkEmail(form) {
  const email = form.find('input[name="email"]'),
        emailValue = email.val().trim();

  let emailError = true;

  if (emailValue === '') {
    showErrorMsg(email, 'Обязательное поле');
  } else if (!regExpMail.test(emailValue) || emailValue.length > 254) {
    showErrorMsg(email, 'Некорректный e-mail');
  } else {
    hideErrorMsg(email);
    emailError = false;
  }

  if (emailError) {
    return false;
  } else {
    return true;
  }
};

function checkTextarea(form) {
  const textarea = form.find('textarea[name="textarea"]'),
        textareaValue = textarea.val().trim();

  let textareaError = true;

  if (textareaValue === '') {
    showErrorMsg(textarea, 'Обязательное поле');
  } else if (textareaValue.length > 171) {
    showErrorMsg(textarea, 'Слишком длинное сообщение');
  } else {
    hideErrorMsg(textarea);
    textareaError = false;
  }

  if (textareaError) {
    return false;
  } else {
    return true;
  }
};

function checkPassword(form) {
  const password =  form.find('input[name="password"]'),
        passwordValue = $(password).val().trim();
  
  let passwordError = true;

  if(passwordValue === '') {
    showErrorMsg(password, errorMessage.empty);
  } else if(passwordValue.length < 8) {
    showErrorMsg(password, errorMessage.regPassword);
  } else {
    hideErrorMsg(password);
    passwordError = false;
  }

  if(passwordError) {
    return false;
  } else {
    return true;
  }
};

function checkPasswordConfirm(form) {
  const password = form.find('input[name="password"]'),
        passwordConfirm = form.find('input[name="password-confirm"]'),
        passwordValue = password.val().trim(),
        passwordConfirmValue  = passwordConfirm.val().trim();

  let passwordError = true,
      passwordConfirmError = true;

  if(passwordValue === '') {
    showErrorMsg(password, errorMessage.empty);
  } else if(passwordValue.length < 8) {
    showErrorMsg(password, errorMessage.regPassword);
  } else {
    hideErrorMsg(password);
    passwordError = false;
  }

  if(passwordConfirmValue === '') {
    showErrorMsg(passwordConfirm, errorMessage.empty);
  } else if(passwordValue !== passwordConfirmValue) {
    showErrorMsg(passwordConfirm, errorMessage.regConfirmPassword);
  } else {
    hideErrorMsg(passwordConfirm);
    passwordConfirmError = false;
  }

  if (passwordError || passwordConfirmError) {
    return false;
  } else {
    return true;
  }
};

function checkCheckbox(form) {
  const checkbox = form.find('input[name="checkbox"]'),
        checkboxValue = checkbox.prop('checked');

  let checkboxError = true;

  if(!checkboxValue) {
    showErrorMsg(checkbox, 'Обязательное поле');
  } else {
    hideErrorMsg(checkbox);
    checkboxError = false;
  }

  if(checkboxError) {
    return false;
  } else {
    return true;
  }
};

function checkInputFile(form) {
  const file = form.find('input[name="file"]'),
        fileValue = file.val();

  let fileError = true;

  if(fileValue === '') {
    showErrorMsg(parent, errorMessage.empty);
  } else {
    hideErrorMsg(parent);
    fileError = false;
  }

  if(fileError) {
    return false;
  } else {
    return true;
  }
};

// check forms
function checkFormSearch(form) {
  const search = form.find('input[type="search"]'),
        searchValue = search.val().trim();

  let searchError = true;

  if(searchValue === '') {
    search.addClass(errorClass);
  } else {
    search.removeClass(errorClass);
    searchError = false;
  }

  if(searchError) {
    return false;
  } else {
    return true;
  }
};

function checkFormSubscribe(form) {
  const email = form.find('input[name="email"]'),
        rules = form.find('input[name="rules-agree"]'),
        emailValue = email.val().trim(),
        rulesValue = rules.prop('checked');

  let emailError = true,
      rulesError = true;

  if(emailValue === '') {
    showErrorMsg(email);
  } else if(!regExpMail.test(emailValue)) {
    showErrorMsg(email);
  } else {
    hideErrorMsg(email);
    emailError = false;
  }

  if(!rulesValue) {
    showErrorMsg(rules);
  } else {
    hideErrorMsg(rules);
    rulesError = false;
  }

  if(emailError || rulesError) {
    return false;
  } else {
    return true;
  }
};

function checkFormAuth(form) {
  const login =  form.find('input[name="USER_LOGIN"]'),
        password =  form.find('input[name="USER_PASSWORD"]'),
        loginValue = $(login).val().trim(),
        passwordValue = $(password).val().trim();
  
  let loginError = true,
      passwordError = true;

  if(loginValue === '') {
    showErrorMsg(login, errorMessage.empty);
  } else {
    hideErrorMsg(login);
    loginError = false;
  }

  if(passwordValue === '') {
    showErrorMsg(password, errorMessage.empty);
  } else {
    hideErrorMsg(password);
    passwordError = false;
  }

  if(loginError || passwordError) {
    return false;
  } else {
    return true;
  }
};

function checkFormRegistration(form) {
  const login = form.find('input[name="REGISTER[LOGIN]"]'),
        name = form.find('input[name="REGISTER[NAME]"]'),
        password = form.find('input[name="REGISTER[PASSWORD]"]'),
        passwordConfirm = form.find('input[name="REGISTER[CONFIRM_PASSWORD]"]'),
        rules = form.find('input[name="rules-agree"]'),
        loginValue = login.val().trim(),
        nameValue = name.val().trim(),
        passwordValue = password.val().trim(),
        passwordConfirmValue  = passwordConfirm.val().trim(),
        rulesValue = rules.prop('checked');

  let loginError = true,
      nameError = true,
      passwordError = true,
      passwordConfirmError = true,
      rulesError = true;

  if(loginValue === '') {
    showErrorMsg(login, errorMessage.empty);
  } else {
    hideErrorMsg(login);
    loginError = false;
  }

  if(nameValue === '') {
    showErrorMsg(name, errorMessage.empty);
  } else {
    hideErrorMsg(name);
    nameError = false;
  }

  if(passwordValue === '') {
    showErrorMsg(password, errorMessage.empty);
  } else if(passwordValue.length < 8) {
    showErrorMsg(password, errorMessage.regPassword);
  } else {
    hideErrorMsg(password);
    passwordError = false;
  }

  if(passwordConfirmValue === '') {
    showErrorMsg(passwordConfirm, errorMessage.empty);
  } else if(passwordValue !== passwordConfirmValue) {
    showErrorMsg(passwordConfirm, errorMessage.regConfirmPassword);
  } else {
    hideErrorMsg(passwordConfirm);
    passwordConfirmError = false;
  }

  if(!rulesValue) {
    showErrorMsg(rules, errorMessage.rulesAgree);
  } else {
    hideErrorMsg(rules);
    rulesError = false;
  }

  if(
      loginError || 
      nameError || 
      passwordError || 
      passwordConfirmError || 
      rulesError
    ) {
    return false;
  } else {
    return true;
  }
};

function checkformUploadPhoto(form) {
  const file = form.find('input[name="PHOTO_FILE"]'),
        name = form.find('input[name="PHOTO_NAME"]'),
        rules = form.find('input[name="rules-agree"]'),
        fileValue = file.val(),
        nameValue = name.val().trim(),
        rulesValue = rules.prop('checked'),
        parent = file.parent();

  let fileError = true,
      nameError = true,
      rulesError = true;

  if(fileValue === '') {
    showErrorMsg(parent, errorMessage.empty);
  } else {
    hideErrorMsg(parent);
    fileError = false;
  }

  if(nameValue === '') {
    showErrorMsg(name, errorMessage.empty);
  } else {
    hideErrorMsg(name);
    nameError = false;
  }

  if(!rulesValue) {
    showErrorMsg(rules, errorMessage.rulesAgree);
  } else {
    hideErrorMsg(rules);
    rulesError = false;
  }

  if(fileError || nameError || rulesError) {
    return false;
  } else {
    return true;
  }
};

function checkFormChangeEmail(form) {
  const email = form.find('input[name="USER_EMAIL"]'),
        emailConfirm = form.find('input[name="USER_CONFIRM_EMAIL'),
        emailValue = email.val().trim(),
        emailConfirmValue  = emailConfirm.val().trim();

  let emailError = true,
      emailConfirmError = true;

  if(emailValue === '') {
    showErrorMsg(email, errorMessage.empty);
  } else if(!regExpMail.test(emailValue)) {
    showErrorMsg(email, errorMessage.email);
  } else {
    hideErrorMsg(email);
    emailError = false;
  }

  if(emailConfirmValue === '') {
    showErrorMsg(emailConfirm, errorMessage.empty);
  } else if(emailValue !== emailConfirmValue) {
    showErrorMsg(emailConfirm, errorMessage.regConfirmEmail);
  } else {
    hideErrorMsg(emailConfirm);
    emailConfirmError = false;
  }

  if(emailError || emailConfirmError) {
    return false;
  } else {
    return true;
  }
};

function checkFormChangePassword(form) {
  const password = form.find('input[name="USER_PASSWORD"]'),
        newPassword = form.find('input[name="USER_NEW_PASSWORD'),
        newPasswordConfirm = form.find('input[name="USER_NEW_CONFIRM_PASSWORD'),
        passwordValue = password.val().trim(),
        newPasswordValue  = newPassword.val().trim(),
        newPasswordConfirmValue =  newPasswordConfirm.val().trim();

  let passwordError = true,
      newPasswordError = true,
      newPasswordConfirmError = true;

  // - TODO: нужна проверка на сравнение со старым паролем
  if(passwordValue === '') {
    showErrorMsg(password, errorMessage.empty);
  } else {
    hideErrorMsg(password);
    passwordError = false;
  }

  if(newPasswordValue === '') {
    showErrorMsg(newPassword, errorMessage.empty);
  } else if(newPasswordValue.length < 8) {
    showErrorMsg(newPassword, errorMessage.regPassword);
  } else {
    hideErrorMsg(newPassword);
    newPasswordError = false;
  }

  if(newPasswordConfirmValue === '') {
    showErrorMsg(newPasswordConfirm, errorMessage.empty);
  } else if(newPasswordValue !== newPasswordConfirmValue) {
    showErrorMsg(newPasswordConfirm, errorMessage.regConfirmPassword);
  } else {
    hideErrorMsg(newPasswordConfirm);
    newPasswordConfirmError = false;
  }

  if(passwordError || newPasswordError || newPasswordConfirmError) {
    return false;
  } else {
    return true;
  }
};

// function onChangeField(func, form) {
//   form.each(function(i, it) {
//     const _this = $(it),
//           inputs = _this.find('input');

//     inputs.each(function(i, it) {
//       $(it).on('change', function() {
        
//       })
//     });
//     _this.on('input', inputs, function() {
//       func(_this);
//     });
//   });
// };

// onChangeField(checkFormSearch, formSearch);
// onChangeField(`${formSubscribe} input`, checkFormSubscribe, $(formSubscribe));
// onChangeField(`${formAuth} input`, checkFormAuth, $(formAuth));
// onChangeField(checkFormRegistration, formReg);
// onChangeField(`${formRecovery} input`, '');