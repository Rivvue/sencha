Ext.define('RV.model.ParticipantsModel', {
    extend: 'Ext.data.Model',
	config:{
		idProperty: 'id',
		fields:[
			{name:'id', type:'long'},
			{name:'participant', type:'string'}
		]
	}
});

