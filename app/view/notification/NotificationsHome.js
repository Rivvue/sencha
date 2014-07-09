Ext.define('RV.view.notification.NotificationsHome', {
    extend: 'Ext.Panel',
    xtype: 'notificationshome',
	config:{
		layout:{type:'vbox'},
		margin:0,
		padding:0,
		 items: [
			{
								xtype : 'toolbar',
								padding:20,
								ui:'white-toolbar',
								docked: 'top',
								items:[									
									{
										xtype:'spacer'
									},
									{
										xtype:'component',
										html:'<span class="createEvent">NOTIFICATIONS</span>'
									},
									{
										xtype:'spacer'
									}
								]
			},			
			{
						xtype: 'notificationslist',	
						margin:'5 0 0 0',						
						flex:1
			}			
		]
	}
});
