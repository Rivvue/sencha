Ext.define('RV.model.EventsModel', {
    extend: 'Ext.data.Model',
	config:{
		idProperty: 'id',
		fields:[
			{name:'id', type:'long'},
			{name:'name', type:'string',convert:function(v,record){
					return v.toLocaleUpperCase();
			}},
			{name:'location', type:'string'},
			{name:'time', type:'string'},
			{name:'timeType', type:'string',convert:function(v,record){
				return record.get('time').substr(-2);
			}},
			{name:'temperature', type:'string'},
			{name:'type', type:'string'},
			{name:'rating', type:'long'},
			{name:'ratingType', type:'string'},
			{name:'ratingObj',type:'auto',convert:function(v,record){
				var obj={};
				obj['rating']=record.get('rating');
				obj['ratingType']=record.get('ratingType');
				return obj;
			}},
			{name:'photo',type:'string',convert:function(v,record){
				if(record.get('type')=='play')
					return 'resources/icons/flag.png';
				if(record.get('type')=='running')
					return 'resources/icons/running.png';
				if(record.get('type')=='sports')
					return 'resources/icons/sports.png';
			}}
		]
	}
});

