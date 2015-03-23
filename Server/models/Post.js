var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
    label: 'Articles'
});

Post.add({
	title: { type: String, required: true, label: 'Titre' },
	state: { type: Types.Select,  options: 'brouillon, publié, archivé', default: 'brouillon', index: true , label: 'Statut' },
	author: { type: Types.Relationship, ref: 'User', index: true , label: 'Auteur'},
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'publié' } , label: 'Date de publication' },
	image: { type: Types.CloudinaryImage , label: 'Image' },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150, label: 'Description' },
		extended: { type: Types.Html, wysiwyg: true, height: 400, label: 'Contenu' }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true , label: 'Catégories'}
});

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
