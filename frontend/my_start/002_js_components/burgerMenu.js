
const burgerMenu = (triggerSelector, menuSelector) => {
  const activeClass = 'is-active',
        showClass = 'is-show',
        document = $(document),
        trigger = $(triggerSelector),
        menu = $(menuSelector);

  function bindMenu() {

    document.on('click', triggerSelector, function() {
      const _this = $(this);
      _this.toggleClass(activeClass);
      menu.toggleClass(showClass);
    });

    document.on('click', function(e) {
      const _target = $(e.target),
            isMenu = _target.closest(menuSelector).hasClass(showClass),
            isTrigger = _target.closest(triggerSelector).hasClass(activeClass);

      if (!isMenu && !isTrigger) {
        trigger.removeClass(activeClass);
        menu.removeClass(showClass);
      }
    });
  };
  
  bindMenu();
};