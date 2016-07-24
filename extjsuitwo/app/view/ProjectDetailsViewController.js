/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.ProjectDetailsViewController', {
    extend: 'Ext.app.ViewController',

    requires: [],

    alias: 'controller.projectDetails',
	
	onAddButtonClick: function(button, e, eOpts) {
		this.getViewModel().setData({addEditMode:true});
		
		this.getView().down('#projectDetailsForm').getForm().loadRecord(Ext.create('ExtJSTrainingTwo.model.Project'));
	},
	
	onEditButtonClick: function(button, e, eOpts) {
		this.getViewModel().setData({addEditMode:true});
	},
	
	onDeleteButtonClick: function(button, e, eOpts) {
		var prjDetFrm = this.getView().down('#projectDetailsForm').getForm();
		var record = prjDetFrm.getRecord();
		var prjStore = Ext.StoreManager.lookup('Projects');
		
		prjStore.remove(record);
        
		prjStore.sync({
			success: function(batch, options) {
				alert('Successfully deleted the record.');
				prjDetFrm.reset(true);
			},
			failure: function() {
				alert('Error: Could not delete the record.');
			}
		});
	},
	
	onSaveButtonClick: function(button, e, eOpts) {
		var prjStore = Ext.StoreManager.lookup('Projects');
		
		this.getViewModel().setData({addEditMode:false});
		
		var rec = this.getView().down('#projectDetailsForm').getForm().getRecord();
		
		rec.set(this.getView().getValues());
		
		if (rec.get('id') < 0) {
			// New record
			prjStore.insert(0, rec);
		}
		
		prjStore.sync();
	},
	
	onCancelButtonClick: function(button, e, eOpts) {
		this.getViewModel().setData({addEditMode:false});
		
		this.getView().down('#projectDetailsForm').getForm().getRecord().reject();
	}
	
	
});
