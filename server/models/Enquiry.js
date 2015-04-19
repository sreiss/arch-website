var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true,
    label: 'Messages'
});

Enquiry.add({
	name: { type: Types.Name, required: true, label: 'Nom' },
	email: { type: Types.Email, required: true },
	phone: { type: String, label: 'Telephone' },
	enquiryType: { type: Types.Select, label: 'Type', options: [
		{ value: 'message', label: 'Simple message' },
		{ value: 'question', label: 'Question' },
		{ value: 'other', label: 'Autre' }
	] },
	message: { type: Types.Html, required: true },
	createdAt: { type: Date, default: Date.now , label: 'Crée le'}
});

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
