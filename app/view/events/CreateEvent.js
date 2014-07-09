Ext.define('RV.view.events.CreateEvent',{
	extend:'Ext.Container',
	xtype: 'createevent',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Toggle',
		'Ext.field.Select',
		'Ext.field.Checkbox'					
    ],
	
    config: {
				iconCls: 'signup',
				title: 'EVENTS',
				scrollable:true,
				minHeight:500,
				autoScroll:true,
				layout:{type:'vbox'},
				padding:0,
				margin:0,
				items:[		
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
													if(this.up('calenderpagenavigation'))
														this.up('calenderpagenavigation').pop();
													if(this.up('notificationnavigation'))
														this.up('notificationnavigation').pop();
													}
												}
											]
									},
									{
										xtype:'spacer'
									},
									{
										xtype:'component',
										html:'<span class="createEvent">Create Event</span>'
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
						xtype: 'fieldset',
						margin:'5 0 0 0',
						items: [
							{
								xtype: 'textfield',
								padding:10,
								placeHolder:'Enter Title',
								inputCls:'create-event field-value',
								name: 'firstName'
							},
							{
								xtype: 'textfield',
								padding:10,
								labelCls:'plain-label description-icon',
								placeHolder:'Enter Description',
								margin:'10 0 0 0',
								labelAlign:'top',
								label: 'Description',
								inputCls:'field-value',
								name: 'description'
							},
							{
								  xtype: 'container', 
								  layout: {type:'hbox', align:'middle'},
								  items: [
									  {
										xtype: 'textfield', 
										padding:10,
										labelCls:'plain-label tag-icon',
										labelAlign:'top',
										label: 'Tags',
										name: 'tags',
										inputCls:'field-value',
										placeHolder:'Enter a Tag',
										flex: 3
									  }, 
									  {
										xtype: 'button', 
										ui:'blue-round',
										margin:'0 10 0 0',
										width:70,
										text: 'Add'
									  }
								  ]
							}
						]
					},
					{
						xtype: 'panel',
						minHeight:70,
						padding:7,
						style:{backgroundColor:'#ffffff'},
						margin:'0 0 20 0',
						layout:'fit',
						items: [
								{
									xtype:'eventtagdataview'
								}
							]
					},
					{
						xtype: 'fieldset',
						margin:'5 0 0 0',
						items: [
							{
								xtype: 'textfield',
								padding:10,
								labelCls:'plain-label location-icon',
								placeHolder:'Enter Location',
								margin:0,
								labelAlign:'top',
								label: 'Where',
								inputCls:'field-value',
								name: 'where'
							}							
						]
					},
					{
							xtype: 'panel',
							height:300,
							layout: 'card',
							items: [
									{
									xtype: 'map',
									useCurrentLocation: true,
									mapOptions: {
									zoom: 15,
									flex:1,
									mapTypeId: google.maps.MapTypeId.ROADMAP
									},
									listeners: {
										maprender: function(map,gmap,options){
											
										}
									}									
								}
							]
						},
					{
						xtype: 'fieldset',
						padding:0,
						border:0,
						margin:0,
						items: [
							{
								xtype: 'textfield',
								border:0,
								labelCls:'plain-label time-icon',
								placeHolder:'Enter Time',
								padding:10,
								label: 'When',
								name: 'when',
								labelWidth:115,
								inputCls:'field-value',
								value:'Tue, December 10 2013'
							}
						]
					},
					
						{
								xtype : 'toolbar',
								ui:'white-toolbar',
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
												text: 'Start Time',
												cls:'toggleButton',
												ui:'toolbar-button',
												pressed:true
											},
											{
												text: 'End Time',
												cls:'toggleButton',
												ui:'toolbar-button'
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
						xtype: 'fieldset',
						margin:'0 0 10 0',
						defaults:{
							labelWidth:'60%'
						},
						items: [
							{
								xtype: 'togglefield',
								name: 'allDayEvent',
								label: 'All Day Event'
							},
							{
								xtype: 'selectfield',
								label: 'Repeat Event',
								options: [
									{text: 'Never',  value: 'never'},
									{text: 'Every Day', value: 'everyDay'},
									{text: 'Every Week', value: 'everyWeek'},
									{text: 'Every 2 Week', value: 'every2Week'},
									{text: 'Every Month', value: 'everyMonth'},
									{text: 'Every Year', value: 'everyYear'}
									
								]
							}
						]
					},
					{
						xtype: 'panel',
						height:100,
						layout:'fit',
						scrollable:false,
						margin:'20 0 10 0',
						items: [
							{
								xtype: 'list',
								cls:'event-options-list',
								scrollable:false,
								itemTpl: '<div class="{iconCls} list-item-name ">{title}</div>',
								pinHeaders:false,
								variableHeights:false,								
								data: [
									{ title: 'Invite', allow :false, iconCls:'group-invite'},
									{ title: 'Looking For Viewable', iconCls:'looking-for'}
								],								
								listeners : {
									'itemtap' : function(list, index, target, record){
									if(index==0)
										this.up('calenderpagenavigation').push({xtype:'invites'});									
									else
										this.up('calenderpagenavigation').push({xtype:'lookingviewable'});									
									}
									
								}
							}
						]
					}	
					
					]
			}
});