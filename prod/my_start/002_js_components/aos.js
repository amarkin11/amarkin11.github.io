// animation page with add condition
const animationPage = (elem) => {
  if($(elem).length > 0) {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      easing: 'ease-in-out',
      duration: 1400,
      once: true,
    });
  }
};

// animation page
const animationPage = () => {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    easing: 'ease-in-out',
    duration: 1400,
    once: true,
  });
};