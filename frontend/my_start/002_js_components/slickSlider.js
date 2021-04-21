
const slider = (elem) => {
  let image = 'img.cover';

  $(elem).on('init reinit beforeChange', (event, slick, currentSlide, nextSlide) => {
    changeCaption('.slider__caption', slick.$slides, nextSlide);
    changeCounter('.slider__counter', nextSlide, slick.slideCount)
  });

  function changeCounter(elem, slide, total) {
    const num = slide ? slide : 0;
    const current = num + 1;
    $(elem).text(current + '/' + total);
  };

  function changeCaption(elem, slide, num) {
    let startTitle = slide.eq(0).find(image).attr('alt'),
        title = slide.eq(num).find(image).attr('alt');
        
    let newTitle = title ? title : startTitle;
    $(elem).hide().fadeIn(300).text(newTitle);
  };

  // function changeTitle(elem, slide, num, attr) {
  //   let startTitle = slide.eq(0).find(sliderItem).data(attr),
  //       title = slide.eq(num).find(sliderItem).data(attr);
        
  //   title = title ? title : startTitle;
  //   $(elem).hide().fadeIn(300).text(title);
  // };


  // function onClickBtnArrow(trigger, method) {
  //   $(trigger).on('click', function() {
  //     $(elem).slick(method);
  //   });
  // };

  function onClickBtnArrow(trigger, method) {
    $(trigger).on('click', function() {
      let _slider = $(this).closest('.slider').find(slider);
      _slider.slick(method);
    });
  };

  
  onClickBtnArrow(trigger, 'slickNext');
  onClickBtnArrow(trigger, 'slickPrev');

  $(elem).slick({
    adaptiveHeight: true,
    dots: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ],
  });

  // add settings

  // $(sliderMain).slick({
  //   slidesToShow: 3,
  //   speed: 700,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         arrows: false,
  //         dots: true,
  //       }
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         arrows: false,
  //         dots: true,
  //       }
  //     },
  //   ]
  // });

  // add settings

  // $(elem).slick({
  //   speed: 700,
  //   centerMode: true,
  //   centerPadding: '28.229vw',
  //   slidesToShow: 1,
  //   arrows: false,
  //   dots: false,
  //   variableWidth: true,
  //   draggable: false,
  //   swipe: false,
  //   swipeToSlide: false,
  //   touchMove: false,
  //   draggable: false,
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         centerMode: false,
  //         // centerPadding: '0px',
  //         variableWidth: false,
  //       }
  //     },
  //   ],
  // });

  // $(slider).slick({
  //   adaptiveHeight: true,
  //   arrows: false,
  //   dots: true,
  //   lazyLoad: 'ondemand',
  //   speed: 700,
  //   slidesToShow: 1,
  // });


  // slider with magnific
  sliderArticle.each(function(i, item) {
    $(item).slick({
      adaptiveHeight: true,
      arrows: false,
      dots: false,
      lazyLoad: 'ondemand',
      speed: 700,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
          }
        },
      ],
    }).magnificPopup({
      delegate: `.slick-slide:not(.slick-cloned) ${sliderItem}`,
      type:'image',
      removalDelay: 300,
      // closeBtnInside: false,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      tLoading: 'Загрузка...',
      gallery: {
        enabled: true,
        preload: [1,2],
        navigateByImgClick: false,
        tCounter: '%curr%/%total%',
        arrowMarkup: 
          `<button class="mfp-arrow mfp-arrow-%dir%">
            <svg class="mfp-prevent-close" width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.45663 12.4784L11.7783 23.8001C12.0448 24.0666 12.4723 24.0666 12.7389 23.8001C13.0055 23.5335 13.0055 23.106 12.7389 22.8394L1.90012 12.0006L12.7389 1.16184C13.0055 0.895267 13.0055 0.467752 12.7389 0.201183C12.6081 0.0704136 12.4321 -4.43e-08 12.2611 -5.92498e-08C12.0901 -7.41997e-08 11.9141 0.0653838 11.7833 0.201183L0.461659 11.5228C0.195089 11.7844 0.19509 12.2169 0.45663 12.4784Z" fill="#262626"/>
            </svg>
          </button>`,
      },
      zoom: {
        enabled: false,
      },
      image: {
        titleSrc: function(item) {
          return changeTitleMagnific(item);
        }
      },
      callbacks: {
        change: function() {
          let _this = this.content;
          createBtnDescMagnific(_this);
        },
        open: function() {
          createWrapImgMagnific();
        },
      },
    });
  });


  // slider for mobile
  const sliderMobile = () => {
    $(window).on('load resize', function() {

      sliderJournal.each(function(i, item) {
        const _this = $(item);

        if(window.matchMedia('(max-width: 639px)').matches) {
          if(!_this.hasClass('slick-initialized')) {
            _this.slick({
              adaptiveHeight: true,
              arrows: false,
              centerMode: true,
              variableWidth: true,
              dots: false,
              speed: 700,
              slidesToShow: 2,
              initialSlide: -1,
              draggable: true,
              responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                  }
                },
              ],
            });
          }
        } else {
          if(_this.hasClass('slick-initialized')) {
            _this.slick('unslick');
          }
        }
      });
    });
  };
};
