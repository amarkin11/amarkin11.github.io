
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

const popups = () => {

  function bindPopup(trigger, popup) {

    $(document).on('click', trigger, function() {
      $(popup).fadeIn().addClass(activeClass);
      $(body).addClass(inActiveClass);
    });
  
    // $(btnClose).on('click', function() {
    //   console.log($(this));
    //   hidePopup();
    // });
  
    $(document).on('click', popup, function(e) {
      let classPopup = popup.split('.')[1],
          classBtn = $(this).find(btnClose).attr('class').split(' ')[0];
  
      if($(e.target).hasClass(classPopup) || $(e.target).hasClass(classBtn)) {
        hidePopup();
      }
    });

    function hidePopup() {
      $(popup).fadeOut().removeClass(activeClass);
      $(body).removeClass(inActiveClass);
    };
  };

  bindPopup(trigger, popup);
};

