
const slider = (elem, counter, gallery) => {

  $(elem).lightSlider({
    item: 1,
    slideMargin: 0,
    loop: false,
    gallery: true,
    thumbItem: 10,
    galleryMargin: 0,
    thumbMargin: 10,
    enableDrag: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          controls: false,
          gallery: false,
          galleryMargin: 20,
          enableDrag: true,
        },
      }
    ],
    onSliderLoad: function (elem) {
      changeCaption(elem, caption, item);

      let currentSlide = elem.getCurrentSlideCount(),
          totalSlides = elem.getTotalSlideCount();

      $(counter).text('1/' + totalSlides);
      hideArrows(currentSlide, totalSlides, '.lSPrev', '.lSNext');

      $(gallery).lightGallery({
        selector: '.lslide',
        enableDrag: false,
        share: false,
        zoom: false,
        fullScreen: false,
        download: false,
        autoplayControls: false,
        toogleThumb: false,
        thumbMargin: 18,
        thumbWidth: 128,
      });
    },
    onBeforeSlide: function (elem) {
      let currentSlide = elem.getCurrentSlideCount();
      let totalSlides = elem.getTotalSlideCount();

      $(counter).text(currentSlide + '/' + totalSlides);
      hideArrows(currentSlide, totalSlides, '.lSPrev', '.lSNext');
    },
    onAfterSlide: function (elem) {
      changeCaption(elem, caption, item);
    },
  });

  function changeCaption(elem, caption, item) {
    const activeElem = elem.find('.slider__item.active');
    let titleValue = activeElem.find(item).data('title');

    $(caption).text(titleValue);
  };

  function hideArrows(currentElem, totalElem, btnPrev, btnNext) {
    switch (currentElem) {
      case 1:
        $(btnPrev).hide();
        break;
      case totalElem:
        $(btnNext).hide();
        break
      default: 
        $(btnPrev).show();
        $(btnNext).show();
    }
  };
};

const gallery = (elem, img) => {

  $(elem).lightGallery({
    selector: img,
    share: false,
    zoom: false,
    fullScreen: false,
    download: false,
    autoplayControls: false,
  });

  $(elem).on('onAfterOpen.lg', function (event, prevIndex, index) {
    let totalSlides = $('#lg-counter-all').text();

    if(totalSlides === '1') {
      $('#lg-counter').hide();
      $('.lg-sub-html').css('padding-top', '0');
      $('.lg-toolbar').css('margin-top', '0');
    } else {
      $('#lg-counter').show();
      $('.lg-sub-html').css('padding-top', '50px');
    }
  
    /* thumbnail set position top */
    // let thumbFullScreen = $('.lg-outer .lg-thumb-outer');
    // let heightImg = $('.lg-outer .lg-image').outerHeight() + 45;
    // thumbFullScreen.css('top', `${heightImg}px`);
  });
};
