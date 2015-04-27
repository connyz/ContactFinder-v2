Ext.define("CF.controller.MainController", {
	extend: "CF.controller.Base",
	id: "MainController",
	refs: [
		{ ref: "contactGrid", selector: "app-main grid" },
		{ ref: "contactDetailsPanel", selector: "app-main form" }
	],
	models: [
		"Contact"
	],
	stores: [
		"Contacts"
	],
	views: [
		"DetailViewPanel",
		"ContactGrid",
		"Main"
	],
	init: function () {
		this.control({
			"app-main": {
				beforerender: this.loadProjectActionItems
			},
			"app-main grid": {
				itemclick: this.displayContactItemDetails
			}
		});
	},
	displayContactItemDetails: function (src, record) {
		//console.log("Record from item details: " + record);
		this.getContactDetailsPanel().loadRecord(record);
	},
	loadProjectActionItems: function () {
		var store = Ext.getStore("Contacts");
		store.load();
		//console.log("function called?");
		this.getContactGrid().reconfigure(store);
	}
});