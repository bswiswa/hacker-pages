Router.configure({layoutTemplate: 'layout'});

Router.route('/');
Router.route('/new-hacker', {name: 'newHackerForm'});
Router.route('/list-hackers', {name: 'hackerList'});
Router.route('/list-new', {name: 'new-hacker'});