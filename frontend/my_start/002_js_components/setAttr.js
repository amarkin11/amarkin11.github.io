function setAttr(elemSelector, attr) {
  const elem = $(elemSelector);

  elem.each(function (i, it) {
    $(it).attr(attr, i);
  });
};
