Ext.define("CF.controller.MainController", {
	extend: "Ext.app.Controller",
	id: "MainController",
	refs: [
		{ ref: "contactGrid", selector: "home grid" },
		{ ref: "contactDetailsPanel", selector: "home form" }
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
			"home grid": {
				itemclick: this.displayProjectActionItemDetails
			}
		});
	},
	displayProjectActionItemDetails: function (src, record) {
		//console.log(record);
		this.getActionItemDetailsPanel().loadRecord(record);
	},
	loadProjectActionItems: function () {
		var store = Ext.getStore("ProjectActionItemStore");
		store.load();
		//console.log("error here?");
		this.getActionItemsGrid().reconfigure(store);
	}
});

/*

Ext.define("MVCWithExtJS4.controller.HomeController", {
	extend: "Ext.app.Controller",
	id: "HomeController",
	refs: [
		{ ref: "actionItemsGrid", selector: "home grid" },
		{ ref: "actionItemDetailsPanel", selector: "home form" }
	],
	models: [
		"ProjectActionItem"
	],
	stores: [
		"ProjectActionItemStore"
	],
	views: [
		"ProjectActionItemDetailsPanel",
		"ProjectActionItemGrid",
		"HomeScreen"
	],
	init: function () {
		this.control({
			"home": {
				beforerender: this.loadProjectActionItems
			},
			"home grid": {
				itemclick: this.displayProjectActionItemDetails
			}
		});
	},
	displayProjectActionItemDetails: function (src, record) {
		//console.log(record);
		this.getActionItemDetailsPanel().loadRecord(record);
	},
	loadProjectActionItems: function () {
		var store = Ext.getStore("ProjectActionItemStore");
		store.load();
		//console.log("error here?");
		this.getActionItemsGrid().reconfigure(store);
	}
});

*/