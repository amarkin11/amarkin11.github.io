
const tabs = (parentSelector, triggerSelector, attr, contentSelector) => {
  const parent = $(parentSelector),
        trigger = $(triggerSelector),
        content = $(contentSelector);

  parent.on('click', triggerSelector, function(e) {
    e.preventDefault();

    const _this = $(this),
          id = _this.attr(attr),
          _content = $(`${contentSelector}[${attr}="${id}"]`);

    $(`${triggerSelector}.is-active`).removeClass(activeClass);
    _this.addClass(activeClass);
    $(`${contentSelector}.is-show`).removeClass(showClass);
    _content.addClass(showClass);
  });

  setAttr(elem, attr);
  setAttr(content, attr);
};
