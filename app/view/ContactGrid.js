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
});