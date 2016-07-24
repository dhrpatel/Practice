/* This is model definition for AgendaItem that matches with 
 * DTO on the service side
 */
Ext.define('ExtJSTrainingTwo.model.Site', {
    extend : 'Ext.data.Model',

    requires: [
        'Ext.data.identifier.Negative',
         'Ext.data.proxy.Rest'
    ],

    // Setting identifier property is need to set to negative.
	// ExtJS will generate negative IDs automatically and 
	// set the RowID
	identifier: 'negative',

    // On the service side, DTO converts rowId to id
	idProperty: 'id',

    // List of Project's properties/fields
	fields : [
        //Section 1: Overview
        {
            name : 'name',
            type : 'string'
        },   
        {
            name: 'address',
            type: 'string'
        },   
        {
            name: 'city',
            type: 'string'
        },   
        {
            name: 'state',
            type: 'string'
        },   
        {
            name: 'zipcode',
            type: 'string'
        }              
    ]
});
