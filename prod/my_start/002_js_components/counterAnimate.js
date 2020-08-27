
const counterAnimate = (elem, start, duration) => {
  $(elem).each(function (i, item) {
    let current = start;
    let end = parseFloat($(item).text());
    let range = end - start;
    let increment = end > start ? 1 : 0;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      $(item).text(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  });
};