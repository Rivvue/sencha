Ext.define('RV.view.core.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',

	config:{
		fullscreen: true,
		tabBarPosition: 'bottom',
		defaults: {
			styleHtmlContent: true
		},
		ui:'main-tabbar',
		 items: [
			{
				xtype:'calenderpagenavigation'
			},
			{
				title: 'CONTACTS',
				iconCls: 'address-book',
				xtype:'invites',
				padding:0
			},
			{
				xtype:'createevent'
			},
			{
				xtype:'notificationnavigation',
				badgeText:7
			}
		]
	}
});
