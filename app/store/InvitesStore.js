Ext.define('RV.store.InvitesStore', {
    extend  :'Ext.data.Store',
	config:
	{
			model   :'RV.model.InvitesModel',
			proxy: {
				type: 'ajax',
				url:'resources/json/MyInvitesList.json'
			},
			autoLoad:true
	}
});

