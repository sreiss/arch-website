// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
	i18n = require('i18n');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Trail',
	'brand': 'Trail',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'wJLc7Gi@"qx1k+lXsIeqJp!NurGZ,%!xMF,VDn"#`%85>4/(DPX!k#3}O8s%X*kH',
	'cloudinary config': 'cloudinary://874592858159134:dkOTzEMiF1qWZpZarX8FgOd3AuE@arch',
    'port': '3023',
    'wysiwyg override toolbar': false,
    'wysiwyg menubar': true,
    'wysiwyg skin': 'lightgray',
    'wysiwyg additional buttons': 'searchreplace visualchars,'
    + ' charmap ltr rtl pagebreak paste, forecolor backcolor,'
    +' emoticons media, preview print ',
    'wysiwyg additional plugins': 'example, table, advlist, anchor,'
    + ' autolink, autosave, bbcode, charmap, contextmenu, '
    + ' directionality, emoticons, fullpage, hr, media, pagebreak,'
    + ' paste, preview, print, searchreplace, textcolor,'
    + ' visualblocks, visualchars, wordcount'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});


// Configure i18n

i18n.configure({
	locale: ['fr','en'],
	directory: __dirname + '/locales',
	defaultLocale: 'fr',
	updateFiles: true,
	saveMissing: true
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'pages': ['pages'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
