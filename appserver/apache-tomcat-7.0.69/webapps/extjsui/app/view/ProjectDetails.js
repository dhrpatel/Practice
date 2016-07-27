/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.ProjectDetails', {
    extend: 'Ext.form.Panel',
    requires: [
        'ExtJSTrainingTwo.view.ProjectDetailsViewController',
        'ExtJSTrainingTwo.view.ProjectDetailsViewModel'
    ],

    xtype: 'projectDetails',
    
    controller: 'projectDetails',
    viewModel: {
        type: 'projectDetails'
    },
	
	title: 'Project Details',
	
	itemId: 'projectDetailsTab',
	
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					text: 'Add',
					bind: {
						visible: '{!addEditMode}'
					},
					listeners: {
						click: 'onAddButtonClick'	// Handler is defined in the associated ViewController
					}
				},
				{
					xtype: 'button',
					text: 'Edit',
					bind: {
						visible: '{!addEditMode}'
					},
					listeners: {
						click: 'onEditButtonClick'	// Handler is defined in the associated ViewController
					}
				},
				{
					xtype: 'button',
					text: 'Delete',
					bind: {
						visible: '{!addEditMode}'
					},
					listeners: {
						click: 'onDeleteButtonClick'	// Handler is defined in the associated ViewController
					}
				},
				{
					xtype: 'button',
					text: 'Save',
					bind: {
						visible: '{addEditMode}'
					},
					listeners: {
						click: 'onSaveButtonClick'	// Handler is defined in the associated ViewController
					}
				},
				{
					xtype: 'button',
					text: 'Cancel',
					bind: {
						visible: '{addEditMode}'
					},
					listeners: {
						click: 'onCancelButtonClick'	// Handler is defined in the associated ViewController
					}
				}
			]
		}
	],
	
	items:[
		{
			xtype: 'form',
			itemId: 'projectDetailsForm',
			items: [
				{
					xtype: 'textfield',
					fieldLabel: 'Name',
					readOnly: true,
					name: 'name',
					bind: {
						readOnly: '{!addEditMode}'
					}
				},
				{
					xtype: 'textfield',
					fieldLabel: 'Lead First Name',
					readOnly: true,
					name: 'leadFirstName',
					bind: {
						readOnly: '{!addEditMode}'
					}
				},
				{
					xtype: 'textfield',
					fieldLabel: 'Lead Last Name',
					readOnly: true,
					name: 'leadLastName',
					bind: {
						readOnly: '{!addEditMode}'
					}
				}
			]
		}
	]

});
