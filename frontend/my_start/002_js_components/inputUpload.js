
const uploadImage = (wrap, input) => {

  function getPreview(elem) {
    const _this = $(elem),
          parent = _this.parent(),
          _file = elem.files[0],
          img = parent.find('img'),
          descBlock = parent.find('.label-upload__desc'),
          isLabelUpload = parent.hasClass('label-upload');

    if(elem.files && _file) {

      const reader = new FileReader();
      reader.onload = function (e) {
        img.attr('src', e.target.result).show();
      }

      if (!_file.type.match('image/*')) {
        alert('Неверный формат фотографии');
      } else if(_file.size > 15728640) {
        parent.removeClass('selected');
        _this.val('');
        img.attr('src', '').hide();
        descBlock.show();
        alert('Большой размер фотографии');
      } else {
        reader.readAsDataURL(_file);

        if(isLabelUpload) {
          parent.addClass('selected');
          descBlock.hide();
        }
      }
    }
  };

  $(wrap).on('change', input, function () {
    const _this = $(this);
    getPreview(_this);
  });
};

