'use strict';

(function(module) {

  var Project = function(obj) {
    this.title = obj.title;
    this.category = obj.category;
    this.url = obj.url;
    this.screenshot = obj.screenshot;
    this.description = obj.description;
    this.pubDate = obj.pubDate;
    this.year = obj.pubDate.slice(0,4);
  };

  Project.all = [];

  Project.prototype.buildHtml = function() {
    var template = Handlebars.compile($('#article-template').html());
    return template(this);
  };

  Project.loadAll = function(data) {
    data.sort(function(a,b) {
      return (new Date(b.pubDate)) - (new Date(a.pubDate));
    });
    data.forEach(function(obj) {
      Project.all.push(new Project(obj));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.data) {
      $.ajax({
        url: 'data/projects.json',
        type: 'HEAD',
        success: function (data, message, xhr) {
          var getETag = xhr.getResponseHeader('ETag');
          if(getETag === JSON.parse(localStorage.savedETag)) {
            Project.loadAll(JSON.parse(localStorage.data));
            projectView.initIndex();
          } else {
            Project.serverGrab();
          }
        }
      });
    } else {
      Project.serverGrab();
    }
  };

  Project.serverGrab = function() {
    $.ajax({
      url: 'data/projects.json',
      type: 'GET',
      dataType: 'JSON',
      success: function(rawData, message, xhr) {
        Project.loadAll(rawData);
        localStorage.data = JSON.stringify(rawData);
        projectView.initIndex();
        localStorage.savedETag = JSON.stringify(xhr.getResponseHeader('ETag'));
      }
    });
  };
  module.Project = Project;
})(window);
