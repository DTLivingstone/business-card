'use strict';

var allProjects = [];

var Project = function(obj) {
  this.title = obj.title;
  this.url = obj.url;
  this.screenshot = obj.screenshot;
  this.description = obj.description;
  this.date = obj.date;
};

Project.prototype.buildHtml = function() {
  //render HTML
  return '<span>hi </span>';
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(obj) {
  projects.push(new Project(obj));
});

projects.forEach(function(obj) {
  $('#portfolio').append(todo.buildHtml);
});
