Ext.define('RV.view.profile.LookingViewable', {
    extend: 'Ext.Panel',
    xtype: 'lookingviewable',

	config:{
		layout:'vbox',
		style:'backgroundColor:#ffffff;',
		items: [
			{
								xtype : 'toolbar',
								padding:10,
								ui:'white-toolbar',
								docked: 'top',
								items:[
									{
										xtype:'component',
										html:'<a class="toolbar-links"><b style="font-size:16px;"><</b></a>',
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
										html:'<span class="createEvent">Looking For & Viewable</span>'
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
				xtype:'viewablelistview',
				height:200
			},
			{
			xtype: 'label',
			flex:1,
			html:'<div class="viewable-info">Using the audience selector right where you post events. This control remembers your selection so future posts will be shared with the same audiences unless you change it.</div>'
			}

		]
	}
});
