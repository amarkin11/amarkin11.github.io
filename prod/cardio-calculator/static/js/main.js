'use strict'

$(() => {
  const teamplateBlock = $('#teamplate-block').html();

  $('.data-input').each((i, item) => {
    $(item).on('keypress', (e) => {
      let charCode = (e.which) ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
      }
    });
  });

  const getResultKcal = (inputDuration, select) => {
    let inputWeight = $('#weight');
  
    switch (select) {
      case 'бадминтон':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 4.7);
        break;
      case 'баскетбол':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 6.8);
        break;
      case 'бег 8,5 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 8.5);
        break;
      case 'бег 10 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 10.6);
        break;
      case 'бег 15 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 15.3);
        break;
      case 'бег на лыжах':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 8.5);
        break;
      case 'бокс':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 9.5);
        break;
      case 'борьба':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 6.4);
        break;
      case 'велосипед 20 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 8.5);
        break;
      case 'велосипед 25 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 11);
        break;
      case 'велосипед 30 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 13);
        break;
      case 'велосипед 35+ км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 17);
        break;
      case 'водное поло':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 10.6);
        break;
      case 'волейбол':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 3.2);
        break;
      case 'восточные единоборства':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 10.6);
        break;
      case 'горный велосипед':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 9);
        break;
      case 'катание на роликах':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 7.4);
        break;
      case 'горные лыжи':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 6.4);
        break;
      case 'настольный теннис':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 5.8);
        break;
      case 'плавание (баттерфляй)':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 11.6);
        break;
      case 'плавание (брасс)':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 10.6);
        break;
      case 'плавание (кроль)':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 11.6);
        break;
      case 'пляжный волейбол':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 8.5);
        break;
      case 'прыжки через скакалку':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 10.6);
        break;
      case 'спортивная ходьба':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 6.8);
        break;
      case 'теннис':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 7.4);
        break;
      case 'тренажерный зал':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 6);
        break;
      case 'тяжелая атлетика':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 6.2);
        break;
      case 'футбол':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 7.4);
        break;
      case 'ходьба 6 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 4.2);
        break;
      case 'ходьба 7 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 4.7);
        break;
      case 'ходьба 8 км/ч':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 5.3);
        break;
      case 'хоккей':
        return Math.round((parseInt(inputDuration) / 60) * parseInt(inputWeight.val()) * 8.5);
        break;
      default:
        'не верный тип активности';
    } 
  };

  const createFields = () => {
    $('.data-list').append(teamplateBlock);

    $('.data-input').each((i, item) => {
      $(item).on('keypress', (e) => {
        let charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          e.preventDefault();
        }
      });
    });
  };

  const addValueResult = () => {
    let select;
    let input;
    let resultKcal;
    let totalKcal = 0;

    $('.row-type').each((i, item) => {
      select = $(item).find('.data-select').val();
      input = $(item).find('.data-input-duration').val();
      resultKcal = getResultKcal(input, select);
      
      $('.results__content').append(
        `<div class="results__row">
          <p class="results__text results__text-type">${select}</p>
          <p class="results__text results__text-duration">${input} мин</p>
          <p class="results__text results__text-kcal">${resultKcal} ккал</p>
        </div>`
      );

      totalKcal += resultKcal;
    });

    $('.result__total-kcal').text(totalKcal + ' ккал');
  };
  
  $('.btn-calc').on('click', () => {
    const validFields = [];
    let count = 0;

    $('.field').each((i, item) => {
      count++;
      if($(item).val() === '') {
        $(item).addClass('is-invalid');
      } else {
        $(item).removeClass('is-invalid');
        validFields.push(i);
      }

      $(item).on('blur', () => {
        if($(item).val() !== '') {
          $(item).removeClass('is-invalid');
          $('.error-message').removeClass('is-show');
        } else {
          $(item).addClass('is-invalid');
          // $('.error-message').addClass('is-show');
          $('.results-wrapper').removeClass('is-show');
          // $('.btn-calc').prop('disabled', false);
        }
      });
    });
    
    if(validFields.length > count - 1) {
      $('.results__content').html('');
      $('.error-message').removeClass('is-show');
      $('.results-wrapper').addClass('is-show');
      addValueResult();
    } else {
      $('.error-message').addClass('is-show');
      $('.results-wrapper').removeClass('is-show');
    }

    if(window.matchMedia('(max-width: 767px)').matches && validFields.length > count - 1) {
      $('.data-wrapper').hide();

      $('.btn-again').on('click', () => {
        $('.field').each((i, item) => {
          $(item).val('');
        });
        $('.row-type').remove();
        createFields();
        $('.data-wrapper').show();
        $('.results-wrapper').removeClass('is-show');
      });
    };

    // if($('.results-wrapper').hasClass('is-show')) {
    //   $('.btn-calc').prop('disabled', true);
    // }
  });

  $('.btn-add').on('click', () => {
    const validFields = [];
    let count = 0;

    $('.field').each((i, item) => {
      count++;
      if($(item).val() === '') {
        $(item).addClass('is-invalid');
      } else {
        $(item).removeClass('is-invalid');
        validFields.push(i);
      }

      $(item).on('blur', () => {
        if($(item).val() !== '') {
          $(item).removeClass('is-invalid');
          $('.error-message').removeClass('is-show');
        } else {
          $(item).addClass('is-invalid');
        }
      });
    });

    if(validFields.length > count - 1) {
      $('.error-message').removeClass('is-show');
      createFields();
    } else {
      $('.error-message').addClass('is-show');
    }
  });

    $('.pick-up').on('click', (e) => {
      e.preventDefault();
      $('.l-popup').addClass('is-active');
      $('body').addClass('is-inactive');
    });

    $('.btn-close').on('click', () => {
      $('.l-popup').removeClass('is-active');
      $('body').removeClass('is-inactive');
    });

    $('.btn-copy').on('click', () => {
      let copyField = '.l-popup__input textarea';
      $(copyField).select();
      document.execCommand('copy');
    });
});



