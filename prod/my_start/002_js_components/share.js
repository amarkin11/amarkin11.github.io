
const shareSocial = (elem) => {
  $(elem).socialLikes({
    counters: false,
  });
};

// event GA
$('.share-link__item').on('click', function() {
  let shareClass = $(this).attr('class').split(' ')[1];
  switch (shareClass) {
    case 'fb':
      ga('send', 'event', 'Share', 'Share_Click', 'FB_Share');
      break;
    case 'vk':
      ga('send', 'event', 'Share', 'Share_Click', 'VK_Share');
      break;
    case 'ok':
      ga('send', 'event', 'Share', 'Share_Click', 'OK_Share');
      break;
    case 'telegram':
      ga('send', 'event', 'Share', 'Share_Click', 'TG_Share');
      break;
    case 'tw':
      ga('send', 'event', 'Share', 'Share_Click', 'TW_Share');
      break;
  }
});

// share block on mobile
const share = () => {

  function bindShare(trigger, elem) {
    $(trigger).on('click', function() {
      $(this).toggleClass('is-active');
      $(elem).toggleClass('is-show');
    });

    $(document).on('click', 'body', function(e) {
      const isShare = $(e.target).hasClass('share'),
            isBtn = $(e.target).hasClass('btn-share');

      if(!isBtn && !isShare && $(trigger).hasClass('is-active')) {
        $(trigger).removeClass('is-active');
        $(elem).removeClass('is-show');
      }
    });
  }

  bindShare(trigger, elem);
};

// share for load next material
const loadNextMaterial = () => {
  if (resp.length > 0) {
    next_article = $(resp);
  
    const url = next_article.filter(nextUrl).text(),
        title = next_article.filter(nextTitle).text(),
        shareSocial = next_article.find('.share .social');
  
    shareSocial.socialLikes({
        url: 'https://www.agroinvestor.ru' + url,
        title: title,
        counters: false,
    });
    shareSocial.find('.social__item--tg')
      .attr('href', 'tg://msg_url?url=https://www.agroinvestor.ru' + url + '&amp;text=' + title);
  }
};

