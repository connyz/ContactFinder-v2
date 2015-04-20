Ext.define('CF.model.DataView', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'name',  type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'phone', type: 'string'},
		{name: 'company', type: 'string'},
		{name: 'imglink', type: 'string'}
	]
});