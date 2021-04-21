
const fullPage = () => {
  const page = $('#fullpage');

  page.fullpage({
    anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    navigation: true,
    scrollBar: true,
    // scrollOverflow: false,
    normalScrollElements: '.scroll-inside',
    paddingTop: '0',
    paddingBottom: '0',
    // afterRender: function() {
    //   animationPage('#fullpage');
    // },
  });

  if(page.length > 0) {
    destroyPlugin('(max-width: 767px)', fullpage_api);

    $(window).on('resize', function() {
      destroyPlugin('(max-width: 767px)', fullpage_api);
    });
  }

  function destroyPlugin(media, api) {
    if (window.matchMedia(media).matches) {
      api.destroy('all');
    }
  };
};

const fullPage = () => {
  const page = $('#fullpage');

  if(page.length > 0) {

    page.fullpage({
      anchors: ['1', '2', '3'],
      scrollBar: true,
      paddingTop: '0',
      paddingBottom: '0',
      afterRender: function() {
        // animationPage('#fullpage');
        onClickScrollTo('.scroll-down', fullpage_api);
      },
      sectionSelector: '.page-main section',
    });
  }

  function onClickScrollTo(elem, api) {
    $(elem).on('click', function(e) {
      e.preventDefault();
      api.moveSectionDown();
    });
  };
};