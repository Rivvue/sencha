Ext.define('RV.model.InvitesModel', {
    extend: 'Ext.data.Model',
	config:{
		idProperty: 'id',
		fields:[
			{name:'id', type:'long'},
			{name:'name', type:'string',convert:function(v,record){
					return v.toLocaleUpperCase();
			}},
			{name:'status', type:'boolean'},
			{name:'photo',type:'string',convert:function(v,record){
					return 'resources/icons/gifticon.png';
			}}
		]
	}
});

