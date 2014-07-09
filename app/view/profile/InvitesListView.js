Ext.define('RV.view.profile.InvitesListView',{
	extend:'Ext.dataview.List',
	alias:'widget.inviteslistview',
	config:
	{
		scrollable:{
			direction:'vertical'
		},
		style:'backgroundColor:#ffffff;',
		baseCls:'invitelistview-basic',
		itemTpl: '<table><tr class="invite-cont"><td class="invite-image-cont"><div class="invite-image"></div></td><td class="invite-name">{name}</td><td class="invite-button-cont"></td></tr></table>',
		store:'InvitesStore',
		listeners : {
			'painted' : function(e){
			var btn = e.dom.getElementsByClassName('invite-button-cont');			
			
			Ext.each(btn, function(item) {
			var checkBtn = item.getElementsByClassName('check-btn');
			if(checkBtn.length==0){
						var button = Ext.create('Ext.field.Checkbox', {
									cls:'check-btn',
									renderTo : item
								});
							}
					});
			}
		}
	}
});