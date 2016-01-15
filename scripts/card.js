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
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('a').attr('href', this.url);
  $newProject.find('a h2').html(this.title);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.find('p').html(this.description);
  // pubdate not displayed yet
  return $newProject;
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
