/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.Project', {
    extend: 'Ext.container.Container',
    requires: [
        'ExtJSTrainingTwo.view.ProjectViewController',
        'ExtJSTrainingTwo.view.ProjectViewModel'
    ],

    xtype: 'project',
    
    controller: 'project',
    viewModel: {
        type: 'project'
    },
	
	title: 'Projects',
	
	items:[
		{
			xtype: 'grid',
			store: 'Projects',
			fields: [
				'name',
				'leadFirstName',
				'leadLastName'
			],
			columns: [
				{ 
					text: 'Name',
					width: 375,
					dataIndex: 'name'
				},
				{ 
					text: 'Lead First Name',
					width: 125,
					dataIndex: 'leadFirstName'
				},
				{ 
					text: 'Lead Last Name',
					width: 125,
					dataIndex: 'leadLastName'
				}
			],
			listeners: {
				itemclick: 'onProjectGridItemClick',
				itemdblclick: 'onProjectGridItemDoubleClick'
			}
		}
	]

});
