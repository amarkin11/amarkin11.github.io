
const copyInputValue = (triggerSelector, elemSelector) => {
  const document = $(document),
        trigger = $(triggerSelector),
        elem = $(elemSelector);

  document.on('click', trigger, function() {
    elem.select();
    document.execCommand('copy');
  });
};