function scrollTo(triggerSelector, selector) {
  const trigger = $(triggerSelector),
        elem = $(selector);
  
  trigger.on('click', function() {

    $(`html, ${selector}`).animate({
      scrollTop: elem.offset().top
    }, 'slow');
  });
};
