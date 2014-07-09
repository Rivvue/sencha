Ext.define('RV.store.EventTagStore', {
    extend  :'Ext.data.Store',
	config:
	{
			fields:[{name:'name',type:'string'}],
			data:[
				{name:'Sports'},
				{name:'Fun'},
				{name:'Pleasure'}
			]
			
	}
});

