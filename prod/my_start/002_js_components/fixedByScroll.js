
const fixedByScroll = (elem, footer) => {
  let elemTop = $(elem).offset().top;
  let elemHeight = $(elem).height();
  let footerTop = $(footer).offset().top;

  function scroll() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop + elemHeight > footerTop) {
      $(elem).css({
        'position': 'absolute',
        'top': 'auto',
        'bottom': '0',
      });
    } else if (scrollTop > elemTop) {
      $(elem).css({
        'position': 'fixed',
        'top': '0',
        'bottom': 'auto',
      });
    } else {
      $(elem).css({
        'position': 'absolute',
        'top': '0',
        'bottom': 'auto',
      });
    }
  };

  $(window).on('scroll', scroll);
};
