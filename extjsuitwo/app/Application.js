/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ExtJSTrainingTwo.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ExtJSTrainingTwo',

	views: [
		'Main'
	],
	
	controllers: [
		
	],
	
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
		
		//Load stores manually
		var projectStore = Ext.create('ExtJSTrainingTwo.store.Projects');
		projectStore.load(function(records, operation, success) {
			console.log(projectStore); // should return the store-component
			console.log(records); // should return an array of at least 1 item
			console.log(projectStore.isLoaded()); // should be true
			console.log(projectStore.getCount()); // should be > 0
		}, this); 
		
		var siteStore = Ext.create('ExtJSTrainingTwo.store.Sites');
		siteStore.load(function(records, operation, success) {
			console.log(siteStore); // should return the store-component
			console.log(records); // should return an array of at least 1 item
			console.log(siteStore.isLoaded()); // should be true
			console.log(siteStore.getCount()); // should be > 0
		}, this);
		
		Ext.create('Ext.container.Viewport', {
			viewModel: {},
			
			items: [
				{
					xtype: 'app-main'
				}
			]
		});
		
    }
});
