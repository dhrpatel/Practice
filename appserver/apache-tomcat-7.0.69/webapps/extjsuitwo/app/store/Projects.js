/* This is definition for Projects store. 
 */
Ext.define('ExtJSTrainingTwo.store.Projects', {
    extend  : 'Ext.data.Store',

    
	// This is similar to Java import. 
	requires : [
		'ExtJSTrainingTwo.model.Project'
    ],
    
	// ID for the store
    storeId : 'Projects',
	
	// Here we are specifying that this store keeps the collection of AgendaItem objects.
    model   : 'ExtJSTrainingTwo.model.Project',
	
	// We are adding REST proxy to this store for making RESTful call to perform CRUD operations.
	proxy: {
		type: 'rest',
        //actionMethods: {create: 'POST', read: 'GET', update: 'post', destroy: 'DELETE'},
		url: 'https://' + document.domain + '/g300training/api/Project/',
		
		// rootProperty specifies where will the response object be read from when REST call returns
		// On the service side, we are wrapping object in WebResponse object that has responseData 
		// property which stores all the return objects.
		reader: {
			type: 'json',
			rootProperty: 'responseData'
		},
		
		writer: {
			type: 'json',
			writeAllFields: true
		}
     },
     autoLoad: true
});