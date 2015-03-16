var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * PageSection Model
 * ==========
 */

var PageSection = new keystone.List('PageSection', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	label: 'Sections de page'
});

PageSection.add({
	title: { type: String, required: true, label: 'Titre' },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true, label: 'Status'  },
	page: { type: Types.Relationship, ref: 'Page', index: true, label: 'Page'  },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' }, label: 'Date de publication' },
	image: { type: Types.CloudinaryImage, label: 'Image associée' },
	background: { type: Types.CloudinaryImage, label: 'Image de fond' },
	content: {
		introduction: { type: Types.Html, wysiwyg: true, height: 150, label: 'Introduction' },
		content: { type: Types.Html, wysiwyg: true, height: 400, label: 'Corps de la section' },
		outro: { type: Types.Html, wysiwyg: true, height: 150, label: 'Conclusion' }
	}
});

PageSection.relationship({ ref: 'Page', path: 'pageSections' });

PageSection.defaultColumns = 'title, state|20%, page|20%, publishedDate|20%';
PageSection.register();
