/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.SiteViewController', {
    extend: 'Ext.app.ViewController',

    requires: [],

    alias: 'controller.site',

    onSiteGridItemClick: function() {
		//alert('Item clicked');
	},
	
	
	onSiteGridItemDoubleClick: function(dataview, record, item, index, e, eOpts) {
		this.loadSiteDetails(record);
		
		var mainView = Ext.ComponentQuery.query('app-main')[0];
		
		var mainTabPnl = mainView.down('#mainTabPanel');
		
		mainTabPnl.setActiveTab(mainTabPnl.down('#siteDetailsTab'));
	},
	
	loadSiteDetails: function(record) {
		var siteDetTab = this.getView().ownerCt.down('#siteDetailsTab')
		
		var siteDetForm = siteDetTab.down('#siteDetailsForm');
		
		siteDetForm.loadRecord(record);
	}
});
