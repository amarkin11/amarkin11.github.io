// import { classes, selectors, jQueryObjects } from './global';

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

function scrollTo(elem, offset = 0) {

  $('html, body').animate({
    scrollTop: elem.offset().top - offset,
  }, 'slow');
};

export {
  _debounce,
  scrollTo
}
