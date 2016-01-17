'use strict';

var projectView = {};

projectView.handleNav = function() {
  $('nav').on('click', '.tab', function(xxx) {
    $('.tab-content').hide();
    var foo = $(this).data('content');
    $('#' + $(this).data('content')).fadeIn(100);
  });

  $('nav .tab:first').click();
};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var category = $(this).attr('data-category');
      if ($('#category-filter option[value ="' + category + '"]').length === 0) {
        $('#category-filter').append('<option value="' + category + '">' + category + '</option>');
      }
      var year = $(this).attr('data-year');
      // console.log($('#year-filter option[value="' + year + '"]').length === 0);
      if (($('#year-filter option[value = "' + year + '"]').length === 0)) {
        $('#year-filter').append('<option value="' + year + '">' + year + '</option>');
      }
    }
  });
};

$(function() {
  projectView.handleNav();
  projectView.populateFilters();
});
