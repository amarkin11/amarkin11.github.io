
const fixedByScroll = (elemSelector, footerSelector, offsetTop = 0) => {
  const elem = $(elemSelector),
        footer = $(footerSelector);

  if(elem.length <= 0) {
    return false;
  }

  let elemTop = elem.offset().top;
      elemHeight = elem.height();

  function scroll() {
    let scrollTop = $(window).scrollTop(),
        footerTop = footer.offset().top - offsetTop;

    if (scrollTop + elemHeight > footerTop) {
      elem.css({
        'position': 'absolute',
        'top': 'auto',
        'bottom': '0',
      });
    } else if (scrollTop > elemTop) {
      elem.css({
        'position': 'fixed',
        'top': '0',
        'bottom': 'auto',
      });
    } else {
      elem.css({
        'position': 'absolute',
        'top': '0',
        'bottom': 'auto',
      });
    }
  };

  scroll();
  $(window).on('scroll', scroll);
  // $(window).on('resize', scroll);
};

