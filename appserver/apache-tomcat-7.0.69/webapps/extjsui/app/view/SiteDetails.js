/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.SiteDetails', {
    extend: 'Ext.form.Panel',
    requires: [
        'ExtJSTrainingTwo.view.SiteDetailsViewController',
        'ExtJSTrainingTwo.view.SiteDetailsViewModel'
    ],

    xtype: 'siteDetails',
    
    controller: 'siteDetails',
    viewModel: {
        type: 'siteDetails'
    },
	
	title: 'Site Details',
	
	itemId: 'siteDetailsTab',
	
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
			itemId: 'siteDetailsForm',
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
					fieldLabel: 'Address',
					readOnly: true,
					name: 'address',
					bind: {
						readOnly: '{!addEditMode}'
					}
				},
				{
					xtype: 'textfield',
					fieldLabel: 'City',
					readOnly: true,
					name: 'city',
					bind: {
						readOnly: '{!addEditMode}'
					}
				},
				{
					xtype: 'textfield',
					fieldLabel: 'State',
					readOnly: true,
					name: 'state',
					bind: {
						readOnly: '{!addEditMode}'
					}
				},
				{
					xtype: 'textfield',
					fieldLabel: 'Zipcode',
					readOnly: true,
					name: 'zipcode',
					bind: {
						readOnly: '{!addEditMode}'
					}
				}
			]
		}
	]

});
