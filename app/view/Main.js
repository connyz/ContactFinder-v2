Ext.define('CF.view.Main', {
	extend: 'Ext.container.Container',
	requires:[
		'Ext.tab.Panel',
		'Ext.layout.container.Border',
		'CF.view.HeaderView',
		'CF.view.ContactGrid',
		'CF.view.DetailViewPanel',
		'CF.view.GooglePanel',
	],
	xtype: 'app-main',
	layout: {
		type: 'border'
	},
	autoScroll: true,
	items: [
		{
			region: 'north',
			height: 170,
			xtype: 'headerview'
		},
		{
			region: 'center',
			xtype: 'panel',
			overflowY: 'auto',
			items: [
				{
					region: 'north',
					items: [
						{
							xtype: 'contactgrid',
						}
					]
				},
				{
					region: 'south',
					layout: 'hbox',
					align: 'center',
					items: [
						{
							xtype: 'detailviewpanel'
						},
						{
							xtype: 'googlepanel'
						}
					]
				}
			]
		},
		{
			region: 'south',
			xtype: 'panel',
			height: 100,
			html: '<p>All rights reserved 2015 - Powered by ExtJS 4.2.0</p>',
			bodyStyle: 'text-align: center;'
		}
	]
});

