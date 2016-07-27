/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.Site', {
    extend: 'Ext.container.Container',
    requires: [
        'ExtJSTrainingTwo.view.SiteViewController',
        'ExtJSTrainingTwo.view.SiteViewModel'
    ],

    xtype: 'site',
    
    controller: 'site',
    viewModel: {
        type: 'site'
    },
	
	title: 'Sites',
	
	items:[
		{
			xtype: 'grid',
			store: 'Sites',
			columns: [
				{ 
					text: 'Name',
					width: 375,
					dataIndex: 'name'
				},
				{ 
					text: 'Address',
					width: 125,
					dataIndex: 'address'
				},
				{ 
					text: 'City',
					width: 125,
					dataIndex: 'city'
				},
				{ 
					text: 'State',
					width: 125,
					dataIndex: 'state'
				},
				{ 
					text: 'Zipcode',
					width: 125,
					dataIndex: 'zipcode'
				}
			],
			listeners: {
				itemclick: 'onSiteGridItemClick',
				itemdblclick: 'onSiteGridItemDoubleClick'
			}
		}
	]

});
