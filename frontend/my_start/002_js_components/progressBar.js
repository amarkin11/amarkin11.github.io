function changeProgressBar(barSelector, elemSelector) {
  const window = $(window),  
        bar = $(barSelector),
        heightElem = $(elemSelector).height();

  function updateProgressBar() {
    let scrollTop = window.scrollTop(),
        windowHeight = window.height(),
        height = heightElem - windowHeight,
        value = scrollTop / height,
        widthBar = Math.ceil(100 * value);

    if(widthBar > 100) {
      bar.css('width', '100%');
    } else if(widthBar < 0) {
      bar.css('width', '0%');
    } else {
      bar.css('width', widthBar + '%');
    }
  };
  
  updateProgressBar();
  $(window).on('scroll', updateProgressBar);
};
