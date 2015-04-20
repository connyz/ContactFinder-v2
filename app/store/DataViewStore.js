Ext.define('CF.store.DataViewStore', {
	extend: 'Ext.data.Store',
	model: 'CF.model.DataView',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url : 'data/dataviewdata.json',
		reader: {
			type: 'json',
			fields: [
				'name',
				'email',
				'phone',
				'company',
				'imglink'
			]
		}
	}
});