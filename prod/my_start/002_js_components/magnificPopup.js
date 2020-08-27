
const burgerMenu = (elem) => {

  $(elem).magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      preload: [1,2],
      navigateByImgClick: false,
      tCounter: '%curr%/%total%'
    },
    zoom: {
      enabled: true,
      duration: 300
    },
  });
};
