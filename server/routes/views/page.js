var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// Set locals

	locals.filters = {
		page: req.params.page
	};
	locals.data = {
		pages: []
	};

	// Load the current page
	view.on('init', function(next) {

		var q = keystone.list('Page').model.findOne({
			state: 'publié',
			slug: locals.filters.page
		});



		q.exec(function(err, result) {
			locals.data.page = result;
            locals.section = result.title;
			next(err);
		});

	});

	// Render the view
	view.render('page');

};
