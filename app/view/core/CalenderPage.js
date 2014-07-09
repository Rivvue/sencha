Ext.define('RV.view.core.CalenderPage', {
    extend: 'Ext.Container',
    xtype: 'calenderpage',
	requires: [
			'Ext.field.Search',
			'Ext.SegmentedButton'
    ],
	
    config: {
				layout:'fit',
				items:[		
					{
								xtype : 'toolbar',								
								ui:'white-toolbar',
								docked: 'top',
								items:[
									{
										xtype:'component',
										html:'<img class="toolbarIcons" src="resources/icons/zoom.png" style="cursor:pointer" />'
									},
									{
										xtype:'spacer'
									},
									{
										xtype:'component',
										html:'<img class="createEvent toolbarIcons2" src="resources/icons/plus.png" style="cursor:pointer" />',
										listeners: [
												{
													element: 'element',
													delegate: 'img.createEvent',
													event: 'tap',
													fn: function() {
														this.up('calenderpagenavigation').push({xtype:'createevent'});
													}
												}
											]
									},
								]
					},
					{
								xtype : 'toolbar',
								title:null,
								ui:'off-white-toolbar',
								docked: 'top',
								items:[				
									{
										xtype:'spacer',
										flex:1
									},								
									{
										xtype:'segmentedbutton',
										padding:'10 0 10 0',
										items: [
											{
												text: 'Activity Feed',
												cls:'toggleButton',
												ui:'toolbar-button',
												pressed: true,
												handler: function(){
													this.up('calenderpage').removeAll();
													this.up('calenderpage').add({xtype:'activityfeedview'});
												}
											},
											{
												text: 'Full Calender View',
												cls:'toggleButton',
												ui:'toolbar-button',
												handler: function(){
													this.up('calenderpage').removeAll();
													this.up('calenderpage').add({xtype:'fullcalenderview'});
												}

											}
										]
									},
									{
										xtype:'spacer',
										flex:1
									}
								]
					},
					{
                     xtype: 'activityfeedview'
					}
				]
	}			
			
});
