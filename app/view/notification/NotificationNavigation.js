Ext.define('RV.view.notification.NotificationNavigation', {
    extend: 'Ext.NavigationView',
    xtype: 'notificationnavigation',
	requires: [

    ],
	
    config: {
				title: 'NOTIFICATIONS',
				iconCls: 'envelope-o',
				layout:'card',
				items:[		
					{
                     xtype: 'notificationshome'
					}
					
				]
	}			
			
});
