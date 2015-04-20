Ext.define('CF.view.GooglePanel', {
	requires: [
		'Ext.window.Window',
		'Ext.ux.GMapPanel'
	],
	extend: 'Ext.panel.Panel',
	alias: 'widget.googlepanel',
	title: 'Google maps',
	height: '100%',
	layout: 'vbox',
	flex: 0.5,
	style: 'border: solid #ccc 2px',
	margin: 20,
	items: [{
		xtype: 'panel',
		autoRender: true,
		autoShow: true,
		width: '100%',
		align: 'stretch',
		flex: 1,
		layout: 'fit',
		items: {
			xtype: 'gmappanel',
			gmapType: 'map',
			center: {
				geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
        marker: {
        	title: 'Fenway Park'
      	}
			},
			mapOptions : {
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		}
	}]
});



/*
 mapwin = Ext.create('Ext.window.Window', {
    autoShow: true,
    layout: 'fit',
    title: 'GMap Window',
    closeAction: 'hide',
    width:450,
    height:450,
    border: false,
    x: 40,
    y: 60,
    items: {
        xtype: 'gmappanel',
        center: {
            geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
            marker: {title: 'Fenway Park'}
        },
        markers: [{
            lat: 42.339641,
            lng: -71.094224,
            title: 'Boston Museum of Fine Arts',
            listeners: {
                click: function(e){
                    Ext.Msg.alert('It\'s fine', 'and it\'s art.');
                }
            }
        },{
            lat: 42.339419,
            lng: -71.09077,
            title: 'Northeastern University'
        }]
    }
});

		*/