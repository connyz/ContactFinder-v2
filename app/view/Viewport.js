Ext.define('CF.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires:[
		'Ext.layout.container.Fit',
		'CF.view.Main'
	],

	layout: {
		type: 'fit'
	},

	items: [{
		xtype: 'app-main'
	}]
});
