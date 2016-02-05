'use strict';

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







Project.serverGrab = function() {
  $.get(
    'data/projects.json',
    function(data) {
      Project.loadAll(data);
      localStorage.data = JSON.stringify(data);
      projectView.initIndex();
    },
    'JSON');
};
Project.serverGrab();
