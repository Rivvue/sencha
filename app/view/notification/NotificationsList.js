Ext.define('RV.view.notification.NotificationsList', {
   extend:'Ext.dataview.List',
	alias:'widget.notificationslist',
	config:
	{
		scrollable:{
			direction:'vertical'
		},
		style:'backgroundColor:#ffffff;',
		baseCls:'notificationlistview-basic',
		itemTpl: new Ext.XTemplate('<table class="notification-cont">'+
				'<tr>'+
					'<td class="notification-image-holder"><div class="notification-image"><div></td>'+
					'<td class="notification-name"><div>{notificationObj:this.getNotification}</div><div><span style="color:green; font-size:22;">" </span>{notificationTime}</div></td>'+
					'<td class="notification-button-cont" type="{notificationType}" >'+
						'<div  class="notification-options"></div>'+
						'<div class="notification-other-options1"></div>'+
						'<div class="notification-other-options2">'+
								'<div class="notification-sub-option1"></div>'+
								'<div class="notification-sub-option2"></div>'+
						'</div>'+
					'</td>'+
					'</tr>'+
				'</table>',
				{
					getNotification : function(notificationObj){
						return notificationObj['invitee']+' '+notificationObj['notification']+' '+notificationObj['event'];
					}
				}
			),
		store:'NotificationsStore',
		listeners : {
			'itemsingletap' : function(me, index, target, record, e){
				if(record.get('notificationType')=='event'){
					var viewEventPage = Ext.create('RV.view.events.ViewAnEvent');
					viewEventPage.setEventInfo(record);
					this.up('notificationnavigation').push(viewEventPage);
				}
			},
			'painted' : function(e){
			var optionsCont = e.dom.getElementsByClassName('notification-button-cont');
			var buttonExist = e.dom.getElementsByClassName('button-exist');
			
			if(buttonExist.length==0){
					Ext.each(optionsCont, function(item) {
					
						if(item.getAttribute('type')=="event"){
						
									var mainOption = item.getElementsByClassName('notification-options')[0];
									var subOption1 = item.getElementsByClassName('notification-sub-option1')[0];
									var subOption2 = item.getElementsByClassName('notification-sub-option2')[0];
									
									Ext.create('Ext.Button', {
										text:'Accept Invitation',
										cls:'button-exist',
										ui:'notification-button1-round',
										renderTo : mainOption
									});

									Ext.create('Ext.Button', {
										text:'Decline',
										ui:'notification-button2-round',
										renderTo : subOption1
									});

									Ext.create('Ext.Button', {
										text:'Maybe',
										ui:'notification-button2-round',
										renderTo : subOption2
									});

								
						}
						else
						{			var mainOption = item.getElementsByClassName('notification-options')[0];
									var subOption = item.getElementsByClassName('notification-other-options1')[0];
									
									Ext.create('Ext.Button', {
										text:'Connect',
										cls:'button-exist',
										ui:'notification-button1-round',
										renderTo : mainOption
									});

									Ext.create('Ext.Button', {
										text:'Not Now',
										ui:'notification-button2-round',
										renderTo : subOption
									});
						
						}
				});
			}
			
			}
		}
	}
});