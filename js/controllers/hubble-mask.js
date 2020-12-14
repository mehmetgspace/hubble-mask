var HubbleMask = function() {
  this.inputList = []
};

HubbleMask.prototype.init = function() {
  var self = this;

  self.checkHasHubbleMask();
};

HubbleMask.prototype.checkHasHubbleMask = function() {
  var self = this;

  // get 'data-hubble-mask' attr
  var attr = $('input').attr('data-hubble-mask');

  if (typeof attr !== 'undefined') {
    self.getAllHubbleMaskItems();
  }

};

HubbleMask.prototype.getAllHubbleMaskItems = function() {
  var self = this;
  var inputs = $('[data-hubble-mask]');

  // get every input
  inputs.each(function(index, el) {
    self.inputList.push(el);
  });

  // default masked input actions
  self.hubbleMaskActions();
};

HubbleMask.prototype.hubbleMaskActions = function() {
  var self = this;

  self.inputList.forEach(function(input) {
    // get masked input value
    var maskedInputValue = $(input).attr('data-hubble-mask');

    // change masked input value if has static values
    self.changeMaskedInputValue(input, maskedInputValue)

    // change masked input max length
    self.changeInputMaxLength(input, maskedInputValue.length)

    // create line for masked input
    self.createMaskLine(input, maskedInputValue);

    // create event listeners for masked inputs
    self.createEventListeners(input);
  });

}

HubbleMask.prototype.changeMaskedInputValue = function(input, value) {
  // remove "x" char from value
  var newValue = value.split('x').join('');

  // update masked input value
  $(input).attr("value", newValue);
};

HubbleMask.prototype.createMaskLine = function(inputEl, value) {
  var group = $(inputEl).parents('.hubble-mask-group');
  var lineContainer = $(group).find('.hubble-mask-line-container');

  // parse every character
  for (var i = 0; i < value.length; i++) {
    var lineClass = 'hubble-mask-line';

    // add empty class if value is empty
    if (value.charAt(i) === ' ') {
      lineClass = 'hubble-mask-line hubble-mask-line--empty'
    }

    // create line element
    $('<div/>', {
      text: '',
      class: lineClass
    }).appendTo(lineContainer);

  }
};

HubbleMask.prototype.changeInputMaxLength = function(input, length) {
  // update masked input maxlength
  $(input).attr("maxlength", length);
};

HubbleMask.prototype.createEventListeners = function(input) {
  // TODO: Event listener for every masked input
};

$(function() {
  var hubbleMask = new HubbleMask();
  hubbleMask.init();
});
