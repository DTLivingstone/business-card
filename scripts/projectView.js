'use strict';

var projectView = {};

projectView.buildOptions = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var category = $(this).attr('data-category');
      $('#category-filter').append('<option value="' + category + '">' + category + '</option>');

      var year = $(this).attr('data-year');
      $('#year-filter').append('<option value ="' + year + '">' + year + '</option>');

    }
  });
};

$(function() {
  projectView.buildOptions();
});
