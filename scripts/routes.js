'use strict';

page.base('');
page('/', Project.fetchAll(projectView.initIndex));
// page('/about', projectView.initAbout);

page();
