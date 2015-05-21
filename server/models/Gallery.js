var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
    label: 'Galeries'
});

Gallery.add({
	name: { type: String, required: true, label: 'Nom' },
	publishedDate: { type: Date, default: Date.now, label: 'Date de publication' },
	heroImage: { type: Types.CloudinaryImage, label: 'Image principale'  },
	images: { type: Types.CloudinaryImages, label: 'Images' }
});



Gallery.register();
