const btnScrollTop = () => {
  scrollTo(btnSelector, body);
  showElemOnScroll(btnSelector, offsetTop);
};