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
    border: false,
    defaults: {
      xtype: "textfield",
      disabled: true,
      style: {
        marginBottom: '10px',
        minWidth: '200'
      }
    },
    items: [
      { name: "name", fieldLabel: "Name" },
      { name: "email", fieldLabel: "Email" },
      { name: "phone", fieldLabel: "Phone" },
      { name: "company", fieldLabel: "Company" },
      { name: "country", fieldLabel: "Country" }
    ],
    height: 300
    //multiSelect: true,
  }]
});

//git test 3