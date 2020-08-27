
const elementIntoView = (elem) => {
  let viewTop = $(window).scrollTop() + $(window).height(); // $(window).height() / 2
  let elemTop = $(elem).offset().top;
  let elemBottom = elemTop + $(elem).height();

  return ((elemTop < viewTop) && (elemBottom > viewTop));
};

// example for elementIntoView

// $(section).each(function(i, item) {
//   if (elementIntoView(item)) {
//     $(`${elemNav}.${activeClass}`).removeClass(activeClass);
//     $(elemNav).eq(i).addClass(activeClass);
//   }
// });

