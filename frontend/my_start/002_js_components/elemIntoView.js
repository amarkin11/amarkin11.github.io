
const elementIntoView = (elemSelector) => {
  const elem = $(elemSelector);
  let viewTop = $(window).scrollTop() + $(window).height(), // $(window).height() / 2
      elemTop = elem.offset().top,
      elemBottom = elemTop + elem.height();

  return ((elemTop < viewTop) && (elemBottom > viewTop));
};

// example for elementIntoView

// $(section).each(function(i, item) {
//   if (elementIntoView(item)) {
//     $(`${elemNav}.${activeClass}`).removeClass(activeClass);
//     $(elemNav).eq(i).addClass(activeClass);
//   }
// });

