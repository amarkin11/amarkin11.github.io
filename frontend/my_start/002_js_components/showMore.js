
const showMore = function(triggerSelector, elemSelector) {
  const activeClass = 'is-active',
        document = $(document),
        // trigger = $(triggerSelector),
        elem = $(elemSelector);

  document.on('click', triggerSelector, function (e) {
    const _this = $(this);
    e.preventDefault();

    _this.toggleClass(activeClass);
    elem.slideToggle();
  });
};
