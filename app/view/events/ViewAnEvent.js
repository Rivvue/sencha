Ext.define('RV.view.events.ViewAnEvent',{
	extend:'Ext.Container',
	xtype: 'viewanevent',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Toggle',
		'Ext.field.Select',
		'Ext.field.Checkbox'					
    ],
	
    config: {
				iconCls: 'team',
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
										html:'<a class="toolbar-links"><b style="font-size:16px;"><</b></a>',
										listeners: [
												{
													element: 'element',
													delegate: 'a.toolbar-links',
													event: 'tap',
													fn: function() {
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
										itemId:'eventHeader'
										
									},
									{
										xtype:'spacer'
									},
									{
										xtype:'component',
										html:'<img class="createEvent" src="resources/icons/plus.png" style="cursor:pointer" />',
										listeners: [
												{
													element: 'element',
													delegate: 'img.createEvent',
													event: 'tap',
													fn: function() {
														this.up('notificationnavigation').push({xtype:'createevent'});
													}
												}
											]
									}
								]
					},
					{
							xtype: 'panel',
							height:150,
							layout: 'fit',
							margin:'20 0 0 0',
							items: [
										{
										xtype:'component',
										itemId:'eventDetailHeader'
										}
									]
					},
					{
							xtype: 'panel',
							height:300,
							layout: 'fit',
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
						margin:'5 0 10 0',
						items: [
							{
								xtype: 'textfield',
								readOnly:true,
								padding:10,
								labelCls:'plain-label event-location-icon',
								margin:'10 0 0 0',
								labelAlign:'left',
								label:' ',
								labelWidth:50,
								value:'Santa Monica, CA, US',
								name: 'where'
							}							
						]
					},
						{
						xtype: 'fieldset',
						margin:'10 0 2 0',
						items: [
							{
								xtype: 'textfield',
								readOnly:true,
								padding:5,
								labelCls:'plain-label friends-icon',
								inputCls:'confirmed-participants',
								margin:'10 0 0 0',
								labelAlign:'left',
								label:' ',
								labelWidth:50,
								value:'Confirmed Participants (4)',
								name: 'where'
							}							
							]
						},
						{
						xtype: 'panel',
						height:300,
						layout:'fit',
						items: [
							{xtype:'participantslist'}
							]
						},
						{
									xtype: 'panel',
									height:70,
									layout:'fit',
									scrollable:false,
									margin:'20 0 10 0',
									items: [
										{
											xtype: 'component',
											html:'<div class="social-status"><div class="status1"><img src="resources/icons/google_plus.png"/><img src="resources/icons/fb_like.png" style="margin-left:20px;"/></div><div class="status2">Comments (1)<br/> Watch (12)</div></div>'
										}
									]
						},
						{
									xtype: 'panel',
									height:50,
									layout:'fit',
									scrollable:false,
									margin:'10 0 10 0',
									items: [
										{
											xtype: 'component',
											html:'<div class="disclosure-component view-event-picture"><div class="disclosure-header">Event Pictures (Post Event Activity)</div><div class="disclosure-action">></div></div>'
										}
									]
						}
						
					]
			},
			
			setEventInfo : function(eventRecord){
				this.down('#eventHeader').setHtml('<span class="eventHeader">'+eventRecord.get('event') +'</span><br/><center><span class="eventSubHeader">'+eventRecord.get('invitee')+'</span></center>');
				
				var rating2 ='';
				var rating1 ='';
				for(var i=0;i<5;i++){
					rating2 +="<img src='resources/icons/rating.png' class='rating-img'/>";
					rating1 +="<img src='resources/icons/rating1.png' class='rating-img' />";
				}
				
				var tpl = '<div class="eventDetailCont">'+
					'<div class="primaryDetailCont">'+
						'<div class="view-event-heading">{0}</div>'+
						'<div class="eventDate">Friday, 20 December 2013</div>'+
						'<div class="eventTime1">8:30 am &#8594; 9:30 am (1 hour)</div>'+
						'<div class="eventTime2">7:00 pm &#8594; 8:00 pm (PST)</div>'+
					'</div>'+
					'<div class="secondaryDetailCont">'+
						'<div class="temperature"><img src="resources/icons/sun1.png" class="rating-img" />     17</div>'+
						'<div class="rating1">IMDB RATING 8.6       '+rating1+'</div>'+
						'<div class="rating2">'+rating2+'       8 Yorum</div>'+
						'<div class="rating3"><img src="resources/icons/measure.png" class="measure-rating-img" />     90/100</div>'+
					'</div>'+		
				'</div>';
				var str = Ext.String.format(tpl,eventRecord.get('event'));
				this.down('#eventDetailHeader').setHtml(str);
			}
});