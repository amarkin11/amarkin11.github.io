
const copyInputValue = (trigger, elem) => {
  $(trigger).on('click', function() {
    $(elem).select();
    document.execCommand('copy');
  });
};