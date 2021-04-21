// example form submit with validate

const forms = (formSelector, trigger = null) => {
  // example with formData and ajax
  $(document).on('submit', formSelector, function(e) {
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

  $(document).on('submit', formSelector, function(e){
    e.preventDefault();

    const _form = $(this);

    if (checkForm(_form)) {
      $.ajax({
        type: 'POST',
        url: '/ajax_request_handlers/mailing_list_subscribe.php',
        data: _form.serialize(),
        success: function(resp){
          if (resp == 'ok'){
            alert('Спасибо! Теперь вы подписаны на нашу рассылку!');
          } else {
            alert('Что-то пошло не так... Попробуйте обновить страницу и повторить попытку');
          }
        }
      });
    }
  });

  $(document).on('submit', formSelector, function(e) {
    e.preventDefault();
    const _this = $(this);

    if(checkFormSubscribe(_this)) {
      console.log(_this);
      alert('submit subscribe');
      _this[0].reset();

      $.ajax({
        type: 'POST',
        url: _this.attr('action'),
        data: _this.serialize(),
        success: function(resp){

          if (resp == 'ok'){
            alert('Спасибо! Теперь вы подписаны на нашу рассылку!');
          } else {
            alert('Что-то пошло не так... Попробуйте обновить страницу и повторить попытку');
          }
        }
      });
    }
  });

  $(document).on('submit', formSelector, function(e) {
    e.preventDefault();
    const _this = $(this),
          _formData = new FormData(this);
    
    console.log(_this);
    setTimeout(() => {
      alert('submit form subscription');
      for(let key of _formData.entries()) {
        console.log(key);
      }
    }, 1000);
  });

  // example default
  $(document).on('submit', formSelector, function(e) {
    e.preventDefault();
    const _this = $(this);

    if(checkForm(_this)) {
      console.log(_this);
      alert('submit form');
      _this[0].reset();
    }
  });

  $(document).on('submit', formSelector, function(e) {
    e.preventDefault();
    const _this = $(this),
          btnCross = _this.closest('.popup').find('.btn-cross'),
          btnsForm = _this.find('button'),
          loader = _this.find('.loader');

    console.log(btnsForm);

    if(checkForm(_this)) {
      console.log(_this);
      loader.addClass('is-active').next().hide();
      btnCross.attr('disabled', true);
      btnsForm.attr('disabled', true);
      setTimeout(() => {
        alert('submit auth');
        loader.removeClass('is-active').next().show();
        btnCross.attr('disabled', false);
        btnsForm.attr('disabled', false);
        _this[0].reset();
      }, 3000);
    }
  });

  $(document).on('submit', formSelector, function(e) {
    e.preventDefault();
    const _this = $(this);

    if(checkFormComment(_this)) {
      console.log(_this);
      alert('submit comment');
      if(_this.closest('.comment__body-item').length > 0) {
        _this.slideUp().prev().show(function() {
          _this.remove();
        });
      }
      _this[0].reset();
    }
  });

  $(document).on('submit', formSelector, function(e) {
    e.preventDefault();
    const _this = $(this),
          confirm = _this.closest('.confirm'),
          initial = confirm.find('.confirm__initial'),
          success = confirm.find('.confirm__success');

    if(checkformUploadPhoto(_this)) {
      console.log(_this);
      setTimeout(() => {
        initial.hide();
        success.show();
        _this[0].reset();
      }, 1000);
    }
  });

  // example submit trigger click
  $(document).on('click', trigger, function() {
    $('.slider__item.is-flip').find(formSelector).submit();
  });
};
