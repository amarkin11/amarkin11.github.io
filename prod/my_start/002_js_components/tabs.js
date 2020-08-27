
const tabs = (trigger, elem, attr, contentElem) => {

  $(trigger).on('click', elem, function(e) {
    e.preventDefault();

    const id = $(this).attr(attr);
    const content = $(`${contentElem}[${attr}="${id}"]`);

    $(`${elem}.is-active`).removeClass(activeClass);
    $(this).addClass(activeClass);
    $(`${contentElem}.is-show`).removeClass(showClass);
    content.addClass(showClass);
  });

  function setAttr(elem) {
    $(elem).each(function (i, it) {
      $(it).attr(attr, i);
    });
  };

  setAttr(elem);
  setAttr(content);
};
