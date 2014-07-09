Ext.define('RV.view.events.ParticipantsList', {
   extend:'Ext.dataview.List',
	alias:'widget.participantslist',
	config:
	{
		scrollable:{
			direction:'vertical'
		},
		style:'backgroundColor:#ffffff;',
		baseCls:'participantlistview-basic',
		itemTpl: new Ext.XTemplate('<table class="participant-cont">'+
				'<tr>'+
					'<td class="notification-image-holder"><div class="participant-image"></div></td>'+
					'<td class="participant-name"><div>{participant}</div></td>'+
						'<td class="participant-button-cont" >'+
							'<div  class="participant-options"></div>'+						
						'</td>'+
					'</tr>'+
				'</table>'
			),
		store:'ParticipantsStore',
		listeners : {
			'painted' : function(e){
			var buttonExist = e.dom.getElementsByClassName('button-exist');
			
			if(buttonExist.length==0){
								var mainOption = e.dom.getElementsByClassName('participant-options');
								
								Ext.each(mainOption,function(item){
									
									Ext.create('Ext.Button', {
										text:'Connect',
										cls:'button-exist',
										ui:'notification-button2-round',
										renderTo : item
									});
									
								});
			}
			
			}
		}
	}
});