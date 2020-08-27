
const uploadImage = (wrap, item, elem, preview, input) => {

  function getPreviewImg() {
    let _elem = $(elem).parent();
    const errorClass = 'is-error',
          hideClass = 'is-hide'

    if (elem.files && elem.files[0]) {
      const reader = new FileReader();

      reader.onload = function () {
        _elem.find($(preview)).attr('src', e.target.result);
      };
  
      if (elem.files[0].size > 15728640) {
        _elem.find($(input)).val('');
        _elem.find($(preview)).attr('src', '');
        _elem.closest(item).find(errorClass).removeClass(hideClass);
      } else {
        reader.readAsDataURL(elem.files[0]);
        _elem.addClass('is-uploaded');
        _elem.closest(item).find(errorClass).addClass(hideClass);
      }
    }
  };

  $(wrap).on('change', input, function () {
    getPreviewImg($(this));
  });
};
