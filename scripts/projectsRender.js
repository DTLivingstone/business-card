'use strict';

var projects = [];

var Projects = function(obj) {
this.title = obj.title;
this.url = obj.url;
this.screenshot = obj.screenshot;
this.description = obj.description;
this.date = obj.date;
};

var Projects.prototype.builtHtml = function() {
  //render HTML
  return '<span>hi </span>';
};

projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
};

projectData.forEach(function(obj) {
  projects.push(new Project(obj));
};

projects.forEach(function(obj) {
  $('#portfolio').append(?.buildHtml)
