Ext.define('RV.view.core.FullCalenderView', {
    extend: 'Ext.Container',
    xtype: 'fullcalenderview',
	requires: [
			
    ],
	
    config: {
                    layout:'fit',
					items:[
						{
									xtype : 'toolbar',
									padding:5,
									ui:'off-white-toolbar',
									docked: 'top',
									items:[
										{
											xtype:'spacer'
										},
										{
										xtype:'component',
										html:'<a class="toolbar-links">DAY</a>',
										listeners: [
												{
													element: 'element',
													delegate: 'a.toolbar-links',
													event: 'tap',
													fn: function() {
														this.up('fullcalenderview').down('calendar').setViewMode('day');
													}
												}
											]
										},
										{
										xtype:'component',
										margin:'0 0 0 10',
										html:'<a class="toolbar-links">WEEK</a>',
										listeners: [
												{
													element: 'element',
													delegate: 'a.toolbar-links',
													event: 'tap',
													fn: function() {
														this.up('fullcalenderview').down('calendar').setViewMode('week');
													}
												}
											]
										},
										{
										xtype:'component',
										margin:'0 0 0 10',
										html:'<a class="toolbar-links">MONTH</a>',
										listeners: [
												{
													element: 'element',
													delegate: 'a.toolbar-links',
													event: 'tap',
													fn: function() {
														this.up('fullcalenderview').down('calendar').setViewMode('month');
													}
												}
											]
										}
									]
						},
						{
							xtype:'calendar',
							viewConfig: {
								viewMode: 'week',
								weekStart: 1,
								value: new Date()
							}
						}
					]
	}			
			
});
