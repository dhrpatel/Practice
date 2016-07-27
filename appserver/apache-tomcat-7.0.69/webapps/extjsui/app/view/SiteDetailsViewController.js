/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.SiteDetailsViewController', {
    extend: 'Ext.app.ViewController',

    requires: [],

    alias: 'controller.siteDetails',
	
	onAddButtonClick: function(button, e, eOpts) {
		this.getViewModel().setData({addEditMode:true});
		
		this.getView().down('#siteDetailsForm').getForm().loadRecord(Ext.create('ExtJSTrainingTwo.model.Site'));
	},
	
	onEditButtonClick: function(button, e, eOpts) {
		this.getViewModel().setData({addEditMode:true});
	},
	
	onDeleteButtonClick: function(button, e, eOpts) {
		var siteDetFrm = this.getView().down('#siteDetailsForm').getForm();
		var record = siteDetFrm.getRecord();
		var siteStore = Ext.StoreManager.lookup('Sites');
		
		siteStore.remove(record);
        
		siteStore.sync({
			success: function(batch, options) {
				alert('Successfully deleted the record.');
				siteDetFrm.reset(true);
			},
			failure: function() {
				alert('Error: Could not delete the record.');
			}
		});
	},
	
	onSaveButtonClick: function(button, e, eOpts) {
		var siteStore = Ext.StoreManager.lookup('Sites');
		
		this.getViewModel().setData({addEditMode:false});
		
		var rec = this.getView().down('#siteDetailsForm').getForm().getRecord();
		
		rec.set(this.getView().getValues());
		
		if (rec.get('id') < 0) {
			// New record
			siteStore.insert(0, rec);
		}
		
		siteStore.sync();
	},
	
	onCancelButtonClick: function(button, e, eOpts) {
		this.getViewModel().setData({addEditMode:false});
		
		this.getView().down('#siteDetailsForm').getForm().getRecord().reject();
	}
	
	
});
