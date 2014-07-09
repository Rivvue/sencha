Ext.define('RV.model.NotificationsModel', {
    extend: 'Ext.data.Model',
	config:{
		idProperty: 'id',
		fields:[
			{name:'id', type:'long'},
			{name:'invitee', type:'string'},
			{name:'event', type:'string',defaultValue:''},
			{name:'notification', type:'string'},
			{name:'notificationObj',type:'auto',convert:function(v,record){
				var obj={};
				obj['invitee']=record.get('invitee');
				obj['notification']=record.get('notification');
				obj['event']=record.get('event');
				return obj;
			}},
			{name:'notificationType', type:'string'},
			{name:'notificationTime', type:'string'},
			{name:'photo',type:'string'}
		]
	}
});

