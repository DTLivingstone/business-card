'use strict';

var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var category = $(this).attr('data-category');
      $('#category-filter').append('<option value="' + category + '">' + category + '</option>');
      var year = $(this).attr('data-year');
      console.log($('#year-filter option[value="' + year + '"]').length === 0);
      if (($('#year-filter option[value = "' + year + '"]').length === 0)) {
        $('#year-filter').append('<option value="' + year + '">' + year + '</option>');
      }
    }
  });
};

$(function() {
  projectView.populateFilters();
});
