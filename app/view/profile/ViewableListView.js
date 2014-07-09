Ext.define('RV.view.profile.ViewableListView',{
	extend:'Ext.dataview.DataView',
	alias:'widget.viewablelistview',
	config:
	{
		scrollable:false,
		style:'backgroundColor:#ffffff;',
		cls:'viewableview-basic',
		itemTpl: '<table><tr><td class="viewable-images {viewableImage}"></td><td><div class="viewable-name">{title}</div><div class="viewable-button-cont1"></div></td><td width="60" class="viewable-button-cont2"></td></tr></table>',
		data: [
				{ title: 'Public', viewableImage :'public-icon'},
				{ title: 'Friends',  viewableImage :'friends-icon'},
				{ title: 'Invitees', viewableImage : 'invitees-icon'},
				{ title: 'Me', viewableImage :'only-me-icon' }
			],
		listeners : {
			'refresh' : function(list){
			var btn1 = list.getEl().dom.getElementsByClassName('viewable-button-cont1');			
			var btn2 = list.getEl().dom.getElementsByClassName('viewable-button-cont2');			
			
			Ext.each(btn1, function(item) {
			var checkBtn = item.getElementsByClassName('check-btn1');
			if(checkBtn.length==0){
						var button = Ext.create('Ext.field.Checkbox', {
									cls:'check-btn1',
									renderTo : item
								});
							}
					});
			
			Ext.each(btn2, function(item) {
			var checkBtn = item.getElementsByClassName('check-btn2');
			if(checkBtn.length==0){
						var button = Ext.create('Ext.field.Checkbox', {
									cls:'check-btn2',
									renderTo : item
								});
							}
					});
			}
		}
	}
});