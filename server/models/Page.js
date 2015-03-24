var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Page Model
 * ==================
 */

var Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Page.add({
	title: { type: String, required: true, label: 'Titre' },
	state: { type: Types.Select, options: 'brouillon, publié, archivé', default: 'brouillon', index: true, label: 'Statut' },
	content : {type: Types.Html, wysiwyg: true, height: 400, label: 'Contenu' },
    pageSections: { type: Types.Relationship, ref: 'PageSection', many: true, label: 'Sections de la page' }
});

Page.relationship({ ref: 'PageSection', path: 'page-sections' });
Page.defaultColumns = 'title, state';
Page.register();
