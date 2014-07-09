Ext.define('RV.view.profile.Invites', {
    extend: 'Ext.Panel',
    xtype: 'invites',

	config:{
		layout:{type:'vbox'},
		 items: [
			{
								xtype : 'toolbar',
								padding:10,
								ui:'white-toolbar',
								docked: 'top',
								items:[
									{
										xtype:'component',
										html:'<a class="toolbar-links">CANCEL</a>',
										listeners: [
												{
													element: 'element',
													delegate: 'a.toolbar-links',
													event: 'tap',
													fn: function() {
														this.up('calenderpagenavigation').pop();
													}
												}
											]
									},
									{
										xtype:'spacer'
									},
									{
										xtype:'component',
										html:'<span class="createEvent">Invite</span>'
									},
									{
										xtype:'spacer'
									},
									{
										xtype:'component',
										html:'<a class="toolbar-links">DONE</h1>'
									},
								]
			},
			{
				xtype:'tabpanel',
				ui:'main-tabbar',
					
				tabBar: {
					docked: 'top',
					layout: {
						pack: 'center'
					},
					fullScreen:true,
					scrollable : 'horizontal'
				},				
				defaults: {
						styleHtmlContent: true
					},

					items: [
						{
							title: 'Facebbook',
							iconCls:'facebook2'
						},
						{
							title: 'Twitter',
							iconCls:'twitter'
						},
						{
							title: 'Google +',
							iconCls:'googleplus'
						},
						{
							title: 'Contacts',
							iconCls:'address-book'
						},
						{
							title: 'Groups',
							iconCls:'group'
						}
					]
			},
			{
						xtype: 'fieldset',
						cls:'search-invites',
						items: [
							{
								xtype: 'textfield',
								labelCls:'plain-label',
								placeHolder:'Search'
							}							
						]
			},
			{
				xtype:'inviteslistview',
				flex:1
			},
			{
						xtype: 'panel',
						height:50,
						layout:'fit',
						scrollable:false,
						margin:'20 0 10 0',
						items: [
							{
								xtype: 'component',
								html:'<div class="disclosure-component"><div class="disclosure-header">Add selected list to a Group</div><div class="disclosure-action">></div></div>'							
							}
						]
			}
			
		]
	}
});
