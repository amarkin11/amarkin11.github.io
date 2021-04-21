
const replaceHref = (elemSelector, url, title) => {
  const elem = $(elemSelector),
        initialUrl = window.location.pathname,
        initialTitle = document.title;

  function elementIntoView(elemSelector) {
      let viewTop = $(window).scrollTop() + $(window).height(),
          elemTop = elem.offset().top,
          elemBottom = elemTop + elem.height();
  
      return ((elemTop < viewTop) && (elemBottom > viewTop));
  }

  function scroll() {
  
      elem.each(function (i, item) {
          if (elementIntoView(item)){
              if (i === 0) {
                  valueTitle = initialTitle;
                  window.history.replaceState('', initialTitle, initialUrl);
                  // window.history.pushState('', initialTitle, initialUrl);
                  document.title = initialTitle;
              } else {
                  let itemParent = $(item).parent();
                  let valueUrl = itemParent.find(url).eq(i-1).text();
                  let valueTitle = itemParent.find(title).eq(i-1).text();
                  if (valueUrl !== window.location.pathname) {
                      window.history.replaceState('', valueTitle, valueUrl);
                      // window.history.pushState('', valueTitle, valueUrl);
                      document.title = valueTitle;
                  }
              }
          }
      });
  };
  
  $(window).on('scroll', scroll);
};

