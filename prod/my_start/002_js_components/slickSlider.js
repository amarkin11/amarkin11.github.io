
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

  function onClickBtnArrow(trigger, method) {
    $(trigger).on('click', function() {
      $(elem).slick(method);
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
};
