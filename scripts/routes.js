'use strict';

page.base('');
page('/', projectController.index);
page('/about', aboutController.index);

page();
