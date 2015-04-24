Ext.define('CF.view.DetailViewPanel', {
  extend: 'Ext.form.Panel',
  alias: 'widget.detailviewpanel',
  //xtype: 'dataviewcontacts',
  title: 'Detailviewpanel',
  //height: 500,
  flex: 0.5,
  style: 'border: solid #ccc 2px',
  margin: 20,
  items: [{
    xtype: 'fieldset',
    defaults: {
      xtype: "textfield",
      disabled: true
    },
    items: [
      { name: "name", fieldLabel: "Name" },
      { name: "email", fieldLabel: "Email" },
      { name: "phone", fieldLabel: "Phone" },
      { name: "company", fieldLabel: "Company" },
      { name: "country", fieldLabel: "Country" }
    ],
    height: 200
    //multiSelect: true,
  }]
});

//git test 3

/*


Ext.define("MVCWithExtJS4.view.ProjectActionItemDetailsPanel", {
  extend : "Ext.form.Panel",
  xtype: "projectactionitemdetails",
  border: false,
  items: [{
    xtype: "fieldset", title: "Details",
    defaults: { xtype: "textfield", disabled: true },
    items: [
      { name: "sno", fieldLabel: "No" },
      { name: "item", fieldLabel: "Action Item" },
      { name: "officer", fieldLabel: "Officer" },
      { name: "status", fieldLabel: "Status" },
      { name: "createdby", fieldLabel: "Created By" },
      { name: "createddate", fieldLabel: "Created date" },
    ]
  }]
});



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