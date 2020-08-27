// example form submit with validate
const form = (trigger, elem) => {

  // many forms

  $(document).on('submit', elem, function(e) {
    e.preventDefault();

    const _form = $(this),
      _formData = new FormData(this);

    if (checkForm(_form)) {
      $.ajax({
        type: 'POST',
        url: _form.attr('action'),
        data: _formData,
        contentType: false,
        processData: false,
        error: function(){
          console.log('error');
        },
        success: function(resp) {
          if (resp.status === 'success'){
            console.log(resp.status);
          } else {
            console.log(resp.status);
          }
        },
        complete: function() {
          console.log('complete');
        },
      });
    }
  });

  $(document).on('click', trigger, function() {
    $('.slider__item.is-flip').find(elem).submit();
  });

  function checkForm(_form) {
    const name = _form.find('input[name="from_whom"]'),
          email = _form.find('input[name="to_whom"]'),
          message = _form.find('textarea[name="message"]'),
          nameValue = name.val().trim(),
          emailValue = email.val().trim(),
          messageValue = message.val().trim();

    let nameError = true,
        emailError = true,
        messageError = true;

    const regExpMail = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    function showErrorMsg(field, text) {
      let parent = field.parent();
      parent.addClass('is-error');
      parent.find('.error-msg').text(text).show();
    };

    function hideErrorMsg(field) {
      let parent = field.parent();
      parent.removeClass('is-error');
      parent.find('.error-msg').hide();
    }

    if (nameValue === '') {
      showErrorMsg(name, 'Обязательное поле');
    } else if (nameValue.length > 19){
      showErrorMsg(name, 'Слишком длинное имя');
    } else {
      hideErrorMsg(name);
      nameError = false;
    }

    if (emailValue === '') {
      showErrorMsg(email, 'Обязательное поле');
    } else if (!regExpMail.test(emailValue) || emailValue.length > 254) {
      showErrorMsg(email, 'Некорректный e-mail');
    } else {
      hideErrorMsg(email);
      emailError = false;
    }

    if (messageValue === '') {
      showErrorMsg(message, 'Обязательное поле');
    } else if (messageValue.length > 19*9){
      showErrorMsg(message, 'Слишком длинное сообщение');
    } else {
      hideErrorMsg(message);
      messageError = false;
    }

    if (nameError || emailError || messageError) {
      return false;
    }

    return true;
  };

  // form subscribe
  $('.subscribe__form').on('submit', function(e){
    e.preventDefault();

    var form = $(this);

    $.ajax({
      type: 'POST',
      url: '/ajax_request_handlers/mailing_list_subscribe.php',
      data: form.serialize(),
      success: function(resp){
        if (resp == 'ok'){
          alert('Спасибо! Теперь вы подписаны на нашу рассылку!');
        } else {
          alert('Что-то пошло не так... Попробуйте обновить страницу и повторить попытку');
        }
      }
    })
  });
};

const formValidate = function() {
    
  const message = {
    loading: 'Loading...',
    success: 'Спасибо!',
    erorr: 'Что-то пошло не так...'
  };

  $('#auth-form').on('submit', function(e) {
    e.preventDefault();
    // получить значение блока, где будет результат отправки
    // const formData = new FormData(this);
    
    // postData('server.html');
    if(checkLogin()) {
      // происходит отправка на сервер
      // console.log(formData);
      alert('send form');
      // closePopup('.popup-login');
    }
  });

  $('#reg-form').on('submit', function(e) {
    e.preventDefault();
    // получить значение блока, где будет результат отправки
    // const formData = new FormData(this);
    
    // postData('server.html');
    if(checkRegistration()) {
      // происходит отправка на сервер
      // console.log(formData);
      alert('send form');
      // closePopup('.popup-login');
      // clearInputs('#reg-form input');
      // $(this)[0].reset();
    }
  });

  $('.subscribe-main form').on('submit', function(e) {
    e.preventDefault();
    // получить значение блока, где будет результат отправки
    // const formData = new FormData(this);
    
    // postData('server.html');
    if(checkSubscribe()) {
      // происходит отправка на сервер
      // console.log(formData);
      alert('send form');
      // closePopup('.popup-login');
      // clearInputs('#reg-form input');
      // $(this)[0].reset();
    }
  });

  $('.search form').on('submit', function(e) {
    e.preventDefault();
    // получить значение блока, где будет результат отправки
    // const formData = new FormData(this);
    
    // postData('server.html');
    if(checkSearch()) {
      // происходит отправка на сервер
      // console.log(formData);
      alert('send form');
      // closePopup('.popup-login');
      // clearInputs('#reg-form input');
      // $(this)[0].reset();
    }
  });

  function checkLogin() {
    const login = '#auth-login',
          password = '#auth-pw',
          btn = '#auth-form .btn',
          loginValue = $(login).val().trim(),
          passwordValue = $(password).val().trim();
    
    let loginError = false,
        passwordError = false;
    
    if(loginValue === '') {
      $(login).css('border-color', 'red');
    } else {
      $(login).css('border-color', 'green');
      loginError = true;
    }
  
    if(passwordValue === '') {
      $(password).css('border-color', 'red');
    } else {
      $(password).css('border-color', 'green');
      passwordError = true;
    }
  
    if(loginError === true && passwordError === true) {
      $(btn).attr('disabled', false);
      return true;
    } else {
      $(btn).attr('disabled', true);
      return false;
    }
  };

  function checkRegistration() {
    const login = '#login',
          name = '#name',
          surname = '#surname',
          email = '#email',
          password = '#pw',
          passwordRepeat = '#pw-repeat',
          captcha = '#captcha',
          rules = '#rules-agree',
          btn = '#reg-form .btn',
          loginValue = $(login).val().trim(),
          nameValue = $(name).val().trim(),
          surnameValue = $(surname).val().trim(),
          emailValue = $(email).val().trim(),
          passwordValue = $(password).val().trim(),
          passwordRepeatValue = $(passwordRepeat).val().trim(),
          captchaValue = $(captcha).val().trim(),
          rulesValue = $(rules).prop('checked');
  
    let loginError = false,
        nameError = false,
        surnameError = false,
        emailError = false,
        passwordError = false,
        passwordRepeatError = false,
        captchaError = false,
        rulesError = false;
  
    let regExpMail = new RegExp(/^\w(?!.*?\.\.)[^@]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
        label = $(rules).parent().find('label');
  
    if(loginValue === '') {
      $(login).css('border-color', 'red');
    } else {
      $(login).css('border-color', 'green');
      loginError = true;
    }
  
    if(nameValue === '') {
      $(name).css('border-color', 'red');
    } else {
      $(name).css('border-color', 'green');
      nameError = true;
    }
  
    if(surnameValue === '') {
      $(surname).css('border-color', 'red');
    } else {
      $(surname).css('border-color', 'green');
      surnameError = true;
    }
  
    if(emailValue === '') {
      $(email).css('border-color', 'red');
    } else if(!regExpMail.test($(email).val())) {
      $(email).css('border-color', 'red');
    } else {
      $(email).css('border-color', 'green');
      emailError = true;
    }
  
    if(passwordValue === '') {
      $(password).css('border-color', 'red');
    } else if(passwordValue.length < 5) {
      $(password).css('border-color', 'red');
    } else {
      $(password).css('border-color', 'green');
      passwordError = true;
    }
  
    if(passwordRepeatValue === '') {
      $(passwordRepeat).css('border-color', 'red');
    } else if(passwordValue !== passwordRepeatValue) {
      $(passwordRepeat).css('border-color', 'red');
    } else {
      $(passwordRepeat).css('border-color', 'green');
      passwordRepeatError = true;
    }
  
    if(captchaValue === '') {
      $(captcha).css('border-color', 'red');
    } else {
      $(captcha).css('border-color', 'green');
      captchaError = true;
    }
  
    if(!rulesValue) {
      label.css('color', 'red');
    } else {
      label.css('color', '#000');
      rulesError = true;
    }
  
    if(
        loginError === true 
        && nameError === true 
        && surnameError === true 
        && emailError === true 
        && passwordError === true 
        && passwordRepeatError === true 
        && captchaError === true 
        && rulesError === true
      ) {
          $(btn).attr('disabled', false);
          return true;
    } else {
      $(btn).attr('disabled', true);
      return false;
    }
  };

  function checkSubscribe() {
    const email = '.subscribe-main input',
          btn = '.subscribe-main button',
          emailValue = $(email).val().trim();
  
    let emailError = false;
    let regExpMail = new RegExp(/^\w(?!.*?\.\.)[^@]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  
    if(emailValue === '') {
      $(email).css('border-color', '#000');
    } else if(!regExpMail.test($(email).val())) {
      $(email).css('border-color', '#000');
    } else {
      $(email).css('border-color', 'green');
      emailError = true;
    }
  
    if(emailError === true) {
      $(btn).attr('disabled', false);
      return true;
    } else {
      $(btn).attr('disabled', true);
      return false;
    }
  };

  function checkSearch() {
    const search = '#search',
          btn = '.search .btn',
          searchValue = $(search).val().trim();
  
    let searchError = false;
  
    if(searchValue === '') {
      $(search).css('border-color', 'red');
    } else {
      $(search).css('border-color', 'green');
      searchError = true;
    }
  
    if(searchError === true) {
      $(btn).attr('disabled', false);
      return true;
    } else {
      $(btn).attr('disabled', true);
      return false;
    }
  };

  function changeInputs(selector, func) {
    const inputs = selector;
    $(inputs).on('change', func);
  };

  function clearInputs(selector) {
    $(selector).val('');
  };

  changeInputs('#auth-form input', checkLogin);
  changeInputs('#reg-form input', checkRegistration);
  changeInputs('.subscribe-main input', checkSubscribe);
  changeInputs('#search', checkSearch);
}();
