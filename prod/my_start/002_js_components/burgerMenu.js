
const burgerMenu = (trigger, elem) => {
  const activeClass = 'is-active',
        showClass = 'is-show';

  $(trigger).on('click', function() {
    $(this).toggleClass(activeClass);
    $(elem).toggleClass(showClass);
  });
};