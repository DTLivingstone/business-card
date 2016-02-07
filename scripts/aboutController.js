'use strict';
(function(module) {

  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn(150);
  };

  module.aboutController = aboutController;
})(window);
