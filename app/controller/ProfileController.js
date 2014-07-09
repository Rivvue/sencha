Ext.define('RV.controller.ProfileController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            invites: 'invites' 
        },
		views:[
			'profile.Invites',
			'profile.InvitesListView',
			'profile.LookingViewable',
			'profile.ViewableListView'
		],
		models:[
			'InvitesModel'
		],
		stores:[
			'InvitesStore'
		],
        control: {
            
        }
    }
});