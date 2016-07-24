/* This is definition for Sites store. 
 */
Ext.define('ExtJSTrainingTwo.store.Sites', {
    extend  : 'Ext.data.Store',

    
	// This is similar to Java import. 
	requires : [
		'ExtJSTrainingTwo.model.Site'
    ],
    
	// ID for the store
    storeId : 'Sites',
	
	// Here we are specifying that this store keeps the collection of AgendaItem objects.
    model   : 'ExtJSTrainingTwo.model.Site',
	
	// We are adding REST proxy to this store for making RESTful call to perform CRUD operations.
	proxy: {
		type: 'rest',
        //actionMethods: {create: 'POST', read: 'GET', update: 'post', destroy: 'DELETE'},
		url: 'https://g300training-dhrpatel.c9users.io/g300training/api/Site/',
		
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