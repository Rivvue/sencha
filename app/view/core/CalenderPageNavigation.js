Ext.define('RV.view.core.CalenderPageNavigation', {
    extend: 'Ext.NavigationView',
    xtype: 'calenderpagenavigation',
	requires: [

    ],
	
    config: {
				title: 'CALENDER',
				layout:'card',
				iconCls: 'calendar',
				items:[		
					{
                     xtype: 'calenderpage'
					}
					
				]
	}			
			
});
