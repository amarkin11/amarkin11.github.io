
const popups = () => {
  const inActiveClass = 'is-inactive',
        showClass = 'is-show';

  function bindPopup(trigger, popup, btnClose) {
    $(trigger).on('click', function() {
      $(popup).addClass(showClass);
      // $(popup).fadeIn(350).addClass(showClass);
      $(body).addClass(inActiveClass);
    });
  
    $(btnClose).on('click', function() {
      $(popup).removeClass(showClass);
      // $(popup).fadeOut(200).removeClass(showClass);
      $(body).removeClass(inActiveClass);
    });
  
    $(popup).on('click', function(e) {
      let classPopup = popup.split('.')[1];
  
      if($(e.target).hasClass(classPopup)) {
        $(popup).removeClass(showClass);
        // $(popup).fadeOut(200).removeClass(showClass);
        $(body).removeClass(inActiveClass);
      }
    });
  };

  bindPopup(trigger, popup, btnClose);
};
