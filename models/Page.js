var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Page Model
 * ==================
 */

var Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Page'
});

Page.add({
	title: { type: String, required: true, label: 'Titre' },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true, label: 'Status' },
	pageSections: { type: Types.Relationship, ref: 'PageSection', many: true, label: 'Sections de la page' }
});

Page.relationship({ ref: 'PageSection', path: 'page-sections' });

Page.register();
