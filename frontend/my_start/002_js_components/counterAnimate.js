
const counterAnimate = (elemSelector, start = 0, duration = 1400) => {
  const elem = $(elemSelector);

  function initAnimation() {
    elem.each(function (i, item) {
      let current = start,
          end = parseFloat($(item).text()),
          range = end - start,
          increment = end > start ? 1 : 0,
          step = Math.abs(Math.floor(duration / range));
          
      let timer = setInterval(() => {
        current += increment;
        $(item).text(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    });
  };

  initAnimation();
};