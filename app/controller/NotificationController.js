Ext.define('RV.controller.NotificationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            
        },
		views:[
			'notification.NotificationsHome',
			'notification.NotificationsList',
			'notification.NotificationNavigation'
		],
		models:[
			'NotificationsModel'
		],
		stores:[
			'NotificationsStore'
		],
        control: {
            
        }
    }
});