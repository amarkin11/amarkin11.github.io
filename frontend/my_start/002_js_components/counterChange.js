
const changeCounter = (elemSelector, plusSelector, minusSelector) => {
  const elem = $(elemSelector),
        plus = $(plusSelector),
        minus = $(minusSelector);

  function onClickIncrement() {
    plus.on('click', function () {
      let value = parseInt(elem.val()) + 1;
      updateValue(value);

      return false;
    });
  };

  function onClickDecrement() {
    minus.on('click', function() {
      let value = parseInt(elem.val()) - 1;
      value = value < 1 ? 1 : value;
      updateValue(value);
      
      return false;
    });
  };

  function updateValue(value) {
    if(elem.val() === '') {
      elem.val('1');
    } else {
      elem.val(value);
    }
    
    elem.change();
  };

  onClickIncrement();
  onClickDecrement();
};