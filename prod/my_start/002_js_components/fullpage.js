
const fullPage = () => {
  $('#fullpage').fullpage({
    anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    navigation: true,
    scrollBar: true,
    // scrollOverflow: false,
    normalScrollElements: '.scroll-inside',
    paddingTop: '0',
    paddingBottom: '0',
    afterRender: function() {
      animationPage('#fullpage');
    },
  });

  if($('#fullpage').length > 0) {
    destroyPlugin('(max-width: 767px)', fullpage_api);

    $(window).on('resize', function() {
      destroyPlugin('(max-width: 767px)', fullpage_api);
    });
  }

  function destroyPlugin(media, plugin) {
    if (window.matchMedia(media).matches) {
      plugin.destroy('all');
    }
  };
};

const fullPage = () => {
  if($('#fullpage').length > 0) {
    $('#fullpage').fullpage({
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

  function onClickScrollTo(elem, apiFullPage) {
    $(elem).on('click', function(e) {
      e.preventDefault();
      apiFullPage.moveSectionDown();
    });
  };
};