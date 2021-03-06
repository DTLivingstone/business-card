'use strict';

(function(module) {

  var projectView = {};

  projectView.handleMenu = function() {
    $('#hamburger').on('click', function() {
      $('nav').toggle();
    });
  };

  projectView.handleResize = function() {
    $(window).resize(function() {
      if ($('#hamburger').css('display') === 'block') {
        $('nav').hide();
      } else {
        $('nav').show();
      }
    });
  };

  projectView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var category = $(this).attr('data-category');
        if ($('#category-filter option[value ="' + category + '"]').length === 0) {
          $('#category-filter').append('<option value="' + category + '">' + category + '</option>');
        }
        var year = $(this).attr('data-year');
        if (($('#year-filter option[value = "' + year + '"]').length === 0)) {
          $('#year-filter').append('<option value="' + year + '">' + year + '</option>');
        }
      }
    });
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn(150);
      } else {
        $('article').fadeIn(150);
        $('article.template').hide();
      }
      $('#year-filter').val('');
    });
  };

  projectView.handleYearFilter = function() {
    $('#year-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-year="' + $(this).val() + '"]').fadeIn(150);
      } else {
        $('article').fadeIn(150);
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  projectView.initIndex = function() {
    Project.all.map(function(obj) {
      $('#portfolio').append(obj.buildHtml());
    });
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    projectView.handleYearFilter();
    projectView.handleMenu();
    projectView.handleResize();
  };

  module.projectView = projectView;
})(window);
