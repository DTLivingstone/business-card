'use strict';
(function(module) {

  var projectController = {};

  projectController.index = function() {
    $('.tab-content').hide();
    Project.fetchAll(projectView.initIndex);
    $('#category-filter').val($('category-filter').prop('defaultSelected'));
    $('#year-filter').val($('year-filter').prop('defaultSelected'));
    $('#portfolio').fadeIn(150);
  };

  module.projectController = projectController;
})(window);
