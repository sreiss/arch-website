var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User',{
    label: 'Utilisateurs'
});

User.add({
	name: { type: Types.Name, required: true, index: true, label: 'Nom' },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true, label: 'Mot de passe' }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true, label: 'Administrateur' }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	//return this.isAdmin;
    return true;
});


/**
 * Relationships
 */

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin';
User.register();
