Ext.define('RV.store.ParticipantsStore', {
    extend  :'Ext.data.Store',
	config:
	{
			model   :'RV.model.ParticipantsModel',
			proxy: {
				type: 'ajax',
				url:'resources/json/ParticipantsList.json'
			},
			autoLoad:true
	}
});

