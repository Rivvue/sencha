Ext.define('RV.view.core.ActivityFeedView', {
    extend: 'Ext.Container',
    xtype: 'activityfeedview',
	requires: [
			
    ],
	
    config: {
                    layout:'vbox',
					items:[
						{
							xtype:'calendar',
							height:100,
							viewConfig: {
								viewMode: 'week',
								weekStart: 1,
								value: new Date()
							},
							listeners : {
								'painted': function(){
									this.setViewMode('week');
								}
							}
						},
						{
							xtype:'eventsdataview',
							flex:1
						}
					]
	}			
			
});
