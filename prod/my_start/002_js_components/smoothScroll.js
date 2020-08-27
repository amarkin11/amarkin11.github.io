
const smoothScroll = (trigger, elem) => {
  $(trigger).on('click', function() {
    $('html,body').animate({
      scrollTop: $(elem).offset().top},
      'slow');
  });
};

// plugin smooth scroll

// const smoothScroll = (elem) => {

//   const scroll = new SmoothScroll(elem, {
//     speed: 300
//   });
// };
