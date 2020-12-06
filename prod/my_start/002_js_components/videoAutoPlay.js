
const playVideo = (trigger, elem, wrap) => {
  $(trigger).on('click', function() {
    $(this).hide();
    $(elem)[0].src += '?autoplay=1';

    // 2 and more video
    // parent = $(this).closest(wrap);
    // parent.find(elem).addClass(showClass).find('iframe')[0].src += '?autoplay=1';
  });
};

const video = () => {

  function elementIntoView(elem) {
    let viewTop = $(window).scrollTop() + $(window).height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).outerHeight();
  
    return ((elemTop < viewTop) && (elemBottom >= viewTop));
  };

  // const tag = document.createElement('script');
  // tag.src = "https://www.youtube.com/iframe_api";

  // const firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
    const script = '<script src="https://www.youtube.com/iframe_api"></script>'

    const lastScript = $('script').last();
    lastScript.before(script);
    // console.log(lastScript);

    window.onYouTubePlayerAPIReady = function() {
      clickBtnPlay();
    };
  }

  function createPlayer(id, url) {
    // console.log('create player');
    const player = new YT.Player(id, {
      height: '100%',
      width: '100%',
      videoId: url,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      }
    });

    const _this = $(player.f),
          poster = _this.parent().find('.video__poster'),
          btnPlay = _this.parent().find('.btn-play');

    // console.log(player);

    function onPlayerStateChange(state) {
      // console.log(state.data);
      if(state.data === 2 || state.data === 0) {
        // console.log('0000');
        btnPlay.show();
        poster.show();
        // player.stopVideo();
      } else {
        btnPlay.hide();
        poster.hide();
      }

      // if(state.data === 1) {
      //   pauseVideobyScroll();
      //   $(window).on('scroll', pauseVideobyScroll);
      // }
      // if(state.data === YT.PlayerState.PLAYING) {
      //   // player.pauseVideo();
      //   $(player).each(function(i, it) {
      //     console.log(state.target);
      //     console.log(this);
      //     // console.log(it.getIframe().id);
      //     // console.log(state.target.getIframe().id);
      //     // console.log(it.getIframe().id != state.target.getIframe().id);
      //     if (it.getPlayerState() == YT.PlayerState.PLAYING && it.getIframe().id != state.target.getIframe().id) { 
      //       // player.pauseVideo();
      //       console.log('eeee');
      //     } 
      //   });
      // }
    };

    function onPlayerReady(event) {
      
      event.target.playVideo();

      btnPlay.on('click', function() {
        // console.log('click 2');
        event.target.playVideo();
      });
    };

    // function pauseVideobyScroll() {
    //   _this.each(function(i, it) {
    //     if(elementIntoView(it)) {
    //       // console.log('view');
    //       // console.log($(it));
    //       player.pauseVideo();
    //     }
    //   });
    // };
  };

  function clickBtnPlay() {
    
    $('.btn-play').on('click', function() {
      // console.log('click 1');
      const _this = $(this),
            poster = _this.parent().find('.video__poster'),
            id = _this.attr('data-video'),
            url = _this.attr('data-url'),
            iframe = _this.parent().find('iframe');

      _this.hide();
      poster.hide();

      if(iframe.length <= 0) {
        createPlayer(id, url);
      }
    });
  };
};
