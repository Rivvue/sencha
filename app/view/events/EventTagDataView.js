Ext.define('RV.view.events.EventTagDataView',{
	extend:'Ext.dataview.DataView',
	alias:'widget.eventtagdataview',
	config:
	{
		scrollable:true,
		inline:true,
		cls:'dataview-inline',
		itemTpl:'<div class="tagHolder">{name}</div>',
		store:'EventTagStore'
	}
});