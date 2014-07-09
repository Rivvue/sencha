Ext.define('RV.store.MyEventsStore', {
    extend  :'Ext.data.Store',
	config:
	{
			model   :'RV.model.EventsModel',
			proxy: {
				type: 'ajax',
				url:'resources/json/MyEventsList.json'
			},
			autoLoad:true
	}
});

