Ext.define('CF.store.Contacts', {
	extend: 'Ext.data.Store',
  model: 'CF.model.Contact',
  autoLoad: true,
  proxy: {
      type: 'ajax',
      url : 'data/contacts.json',
      reader: {
          type: 'json'
      }
  }
});