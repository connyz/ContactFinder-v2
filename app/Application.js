Ext.define('CF.Application', {
	name: 'CF',

	extend: 'Ext.app.Application',

	models: [
		// Todo: add models here
		'Contact'
	],

	views: [
		// TODO: add views here
		'HeaderView',
		'Main'
	],

	controllers: [
		// TODO: add controllers here

	],

	stores: [
		// TODO: add stores here
		'Contacts'
	]
});
