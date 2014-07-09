Ext.define('RV.store.NotificationsStore', {
    extend  :'Ext.data.Store',
	config:
	{
			model   :'RV.model.NotificationsModel',
			proxy: {
				type: 'ajax',
				url:'resources/json/NotificationsList.json'
			},
			autoLoad:true
	}
});

