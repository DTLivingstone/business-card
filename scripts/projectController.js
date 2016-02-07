'use strict';
(function(module) {

  var projectController = {};

  projectController.index = function() {
    $('.tab-content').hide();
    Project.fetchAll(projectView.initIndex);
    $('#category-filter option[value =""]');
    $('#year-filter option[value =""]');
    $('#portfolio').fadeIn(150);
  };

  module.projectController = projectController;
})(window);
