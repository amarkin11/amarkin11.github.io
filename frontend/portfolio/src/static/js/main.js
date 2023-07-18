'use strict';

import { classes } from './modules/global';
import { scrollTo, showElemOnScroll } from './modules/utils';

const updateDate = () => {
  const dateBlock = $('.js-footer-date'),
        dateCurrent = new Date().getFullYear();

  dateBlock.text(dateCurrent);
};

const showCards = () => {
  $('.js-btn-more').on('click', function() {
    const hideCards = $('.cards__item.hide'),
          { hideClass } = classes,
          count = 4;

    hideCards
      .slice(0, count)
      .removeClass(hideClass)
      .hide()
      .fadeIn();

    if((hideCards.length - count) <= 0) {
      $(this).hide();
    }
  });
};

const btnScrollTop = () => {
  const btn = '.js-btn-go-top',
        offsetTop = $(window).height(),
        { bodyClass } = classes;

  scrollTo(btn, bodyClass);
  showElemOnScroll(btn, offsetTop);
};

$(function () {
  updateDate();
  showCards();
  btnScrollTop();
});
