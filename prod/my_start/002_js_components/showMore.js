
const showMore = function(trigger, elem) {
  const activeClass = 'is-active';

  $(trigger).on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass(activeClass);
    $(elem).slideToggle();
  });
};
