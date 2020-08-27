
const playVideo = (trigger, elem, wrap) => {
  $(trigger).on('click', function() {
    $(this).hide();
    $(elem)[0].src += '?autoplay=1';

    // 2 and more video
    // parent = $(this).closest(wrap);
    // parent.find(elem).addClass(showClass).find('iframe')[0].src += '?autoplay=1';
  });
};
