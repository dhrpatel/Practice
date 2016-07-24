/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSTrainingTwo.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'ExtJSTrainingTwo.view.MainViewController',
        'ExtJSTrainingTwo.view.MainViewModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },
	
	items:[
		{
			xtype: 'tabpanel',
			itemId: 'mainTabPanel',
			items: [
				{
					xtype: 'project'
				},
				{
					xtype: 'projectDetails'
				},
				{
					xtype: 'site'
				},
				{
					xtype: 'siteDetails'
				}
			]
		}
	]

});
