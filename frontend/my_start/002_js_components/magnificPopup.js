function createWrapImgMagnific() {
  let tmpWrap = `<div class="mfp-img-wrap"></div>`;
  $('.mfp-img').wrap(tmpWrap);
};

function changeTitleMagnific(item) {
  let title = item.el.data('title'),
      author = item.el.data('desc');
  return `<p>${title}</p><p>${author}</p>`;
};

function createBtnDescMagnific(item) {
  let _counterBlock = item.find('.mfp-counter'),
      btnTmp = `<button></button>`;

  _counterBlock.append(btnTmp);

  let btn = _counterBlock.find('button'),
      desc = item.find('.mfp-title');

  desc.removeClass(hideClass);
  
  $(btn).on('click', function() {
    $(desc).toggleClass(hideClass);
  });
};

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

$('.photo').magnificPopup({
  delegate: '.photo__item',
  type:'image',
  removalDelay: 300,
  mainClass: 'mfp-no-margins mfp-with-zoom',
  tLoading: 'Загрузка...',
  gallery: {
    enabled: false,
    navigateByImgClick: false,
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


$('.photo-header__img, .figure-fullscreen div').magnificPopup({
  type:'image',
  removalDelay: 300,
  mainClass: 'mfp-no-margins mfp-with-zoom',
  tLoading: 'Загрузка...',
  gallery: {
    enabled: false,
    navigateByImgClick: false,
  },
  zoom: {
    enabled: false,
  },
  callbacks: {
    open: function() {
      createWrapImgMagnific();
      this.container.css({
        'padding-right': '0',
      });
      this.container.find('.mfp-bottom-bar').hide();
    },
  },
});

