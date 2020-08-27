
const changeCounter = (elem, triggerPlus, triggerMinus) => {

  function incrementCounter() {
    $(triggerPlus).on('click', function () {
      let value = parseInt($(elem).val()) + 1;
      setValue(value);

      return false;
    });
  };

  function decrementsCounter() {
    $(triggerMinus).on('click', function() {
      let value = parseInt($(elem).val()) - 1;
      value = value < 1 ? 1 : value;
      setValue(value);
      
      return false;
    });
  };

  function setValue(value) {
    if($(elem).val() === '') {
      $(elem).val('1');
    } else {
      $(elem).val(value);
    }
    
    $(elem).change();
  };

  incrementCounter();
  decrementsCounter();
};