/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.ProjectViewController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.project',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
	
	onProjectGridItemClick: function() {
		//alert('Item clicked');
	},
	
	
	onProjectGridItemDoubleClick: function(dataview, record, item, index, e, eOpts) {
		this.loadProjectDetails(record);
		
		var mainView = Ext.ComponentQuery.query('app-main')[0];
		
		var mainTabPnl = mainView.down('#mainTabPanel');
		
		mainTabPnl.setActiveTab(mainTabPnl.down('#projectDetailsTab'));
	},
	
	loadProjectDetails: function(record) {
		var prjDetTab = this.getView().ownerCt.down('#projectDetailsTab')
		
		var prjDetForm = prjDetTab.down('#projectDetailsForm');
		
		prjDetForm.loadRecord(record);
	}
});
