import { classes, selectors, jQueryObjects } from './global';

function _debounce(func, time) {

  let timeout;

  return function() {

    if (timeout) {
      return false;
    }

    func.apply(this, arguments);

    timeout = true;

    setTimeout(() => {
      timeout = false
    }, time);
  };
};

function scrollTo(trigger, selector) {

  $(trigger).on('click', function() {
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 'slow');
  });
};

function showElemOnScroll(selector, offsetTop) {
  const { showClass } = classes;

  function showElem() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > offsetTop) {
      $(selector).addClass(showClass);
    } else {
      $(selector).removeClass(showClass);
    }
  };

  showElem();
  $(window).on('scroll', showElem);
};

export {
  _debounce,
  scrollTo,
  showElemOnScroll
}
