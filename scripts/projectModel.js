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
    Project.all = data.map(function(obj) {
      return new Project(obj);
    });

    Project.totalLength = Project.all.map(function(obj) {
      return obj.description.match(/\b\w+/g).length
      ;
    })
    .reduce(function(prev, curr) {
      return prev + curr;
    });

    Project.avgLength = Project.totalLength / Project.all.length;

    console.log('you\'ve posted ' + Project.all.length + ' projects with an average length of ' + Project.avgLength + ' words.');
  };

  Project.fetchAll = function(callback) {
    if (localStorage.data) {
      $.ajax({
        url: 'data/projects.json',
        type: 'HEAD',
        success: function (data, message, xhr) {
          var getETag = xhr.getResponseHeader('ETag');
          if(getETag === JSON.parse(localStorage.savedETag)) {
            Project.loadAll(JSON.parse(localStorage.data));
            console.log('callback: ' + callback);
            callback();
          } else {
            Project.serverGrab(callback);
          }
        }
      });
    } else {
      Project.serverGrab(callback);
    }
  };

  Project.serverGrab = function(callback) {
    $.ajax({
      url: 'data/projects.json',
      type: 'GET',
      dataType: 'JSON',
      success: function(rawData, message, xhr) {
        Project.loadAll(rawData);
        localStorage.data = JSON.stringify(rawData);
        callback();
        localStorage.savedETag = JSON.stringify(xhr.getResponseHeader('ETag'));
      }
    });
  };

  module.Project = Project;
})(window);
