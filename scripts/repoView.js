'use strict';

(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return '<li><a href="' + repo.html_url + '">' + repo.name + ' ' + repo.updated_at + '</a></li>'; //make this pretty
  };

  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.all.map(render) //change this to only repos updated recently
    );
  };

  module.repoView = repoView;
})(window);
