'use strict';

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    console.log(repo);
    return '<li>' + repo.names + '</li>';
  };

  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.with('forks_count').map(render)
    );
  };

  module.repoView = repoView;
})(window);
