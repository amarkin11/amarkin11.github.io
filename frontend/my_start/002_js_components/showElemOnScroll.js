function showElemOnScroll(selector, offsetTop) {
  const elem = $(selector);
  
  function showElem() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > offsetTop) {
      elem.addClass(showClass);
    } else {
      elem.removeClass(showClass);
    }
  };

  showElem();
  $(window).on('scroll', showElem);
};

// function showElemOnScroll(elem, top, elemEvent) {
  
//   function showElem() {
//     let scrollTop = $(elemEvent).scrollTop();

//     if(scrollTop > top) {
//       $(elem).addClass(showClass);
//     } else {
//       $(elem).removeClass(showClass);
//     }
//   };

//   showElem();
//   $(elemEvent).on('scroll', showElem);
// };

