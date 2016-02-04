'use strict';

var allProjects = [];

var Project = function(obj) {
  this.title = obj.title;
  this.category = obj.category;
  this.url = obj.url;
  this.screenshot = obj.screenshot;
  this.description = obj.description;
  this.pubDate = obj.pubDate;
  this.year = obj.pubDate.slice(0,4);
};

Project.prototype.buildHtml = function() {
  var template = Handlebars.compile($('#article-template').html());
  return template(this);
};

projectData.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

projectData.forEach(function(obj) {
  allProjects.push(new Project(obj));
});

allProjects.forEach(function(obj) {
  $('#portfolio').append(obj.buildHtml());
});
