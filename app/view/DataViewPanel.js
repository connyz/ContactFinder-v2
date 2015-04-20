Ext.define('CF.view.DataViewPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.dataviewpanel',
  xtype: 'dataviewcontacts',
  title: 'Dataviewpanel',
  //height: 500,
  flex: 0.5,
  style: 'border: solid #ccc 2px',
  margin: 20,
  items: [{
    xtype: 'dataview',
    store: 'DataViewStore',
    tpl: [
      '<tpl for=".">',
        '<div class="dataViewItem">',
          '<p>Name: {name}</p>',
          '<p>Email: {email}</p>',
          '<p>Phone: {phone}</p>',
          '<p>Company: {company}</p>',
          '<p>Country: {country}</p>',
        '</div>',
      '</tpl>'
    ],
    autoHeight: true,
    multiSelect: true,
    itemSelector: 'div.dataViewItem'
  }]
});

//git test 2

/*
Ext.define('CF.view.ContactGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.contactgrid',
  title: 'Contacts',
  store: 'Contacts',
  columns: [
    { text: 'Name',  dataIndex: 'name', flex: 1 },
    { text: 'Email', dataIndex: 'email', flex: 1 },
    { text: 'Phone', dataIndex: 'phone', flex: 1 }
  ],
  height: 300,
  style: 'border: solid #ccc 2px',
  margin: 20
  //width: 400
});

     items: new Ext.DataView({
            store: winStore,
            tpl: winTpl,
            autoHeight:true,
            multiSelect: true,
            overClass:'x-view-over'
        }),



          columns: [
    { text: 'Name',  dataIndex: 'name' },
    { text: 'Email', dataIndex: 'email' },
    { text: 'Phone', dataIndex: 'phone' },
    { text: 'Company', dataIndex: 'company' },
    { text: 'Company', dataIndex: 'imglink' }
  ],


*/