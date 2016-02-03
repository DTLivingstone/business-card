'use strict';

var projectView = {};

projectView.handleMenu = function() {
  $('#hamburger').on('click', function() {
    console.log('click');
    $('nav').toggle();
  });
};

projectView.handleResize = function() {
  $(window).resize(function() {
    if ($('#hamburger').css('display') === 'block') {
      $('header div').removeClass('four columns');
      $('header div').addClass('twelve columns');
      $('nav').removeClass('eight columns');
      $('nav').addClass('one column');
      $('nav').addClass('mobile-nav');
    } else {
      $('header div').removeClass('twelve columns');
      $('header div').addClass('four columns');
      $('nav').removeClass('one columns');
      $('nav').addClass('eight columns');
      $('nav').removeClass('mobile-nav');
    }
  });
};

projectView.handleNav = function() {
  $('nav').on('click', '.tab', function(a) {
    $('.tab-content').hide();
    var foo = $(this).data('content');
    $('#' + $(this).data('content')).fadeIn(150);
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
      console.log($(this).val());
      $('article[data-year="' + $(this).val() + '"]').fadeIn(150);
    } else {
      $('article').fadeIn(150);
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

$(function() {
  projectView.handleNav();
  projectView.handleResize();
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleYearFilter();
  projectView.handleMenu();
});
