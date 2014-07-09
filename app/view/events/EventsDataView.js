Ext.define('RV.view.events.EventsDataView',{
	extend:'Ext.dataview.DataView',
	alias:'widget.eventsdataview',
	config:
	{
		scrollable:{
			direction:'vertical'
		},
		cls:'dataview-basic',
		itemTpl:new Ext.XTemplate(
		'<table class="eventList">'+
		'<tr>'+
		'<td rowspan="3" class="img" style="background-image :url({photo});"></td>'+
		'<td class="eventListHeader">{name}</td> <td class="temperature"><div style="float:right;" class="time-{timeType}">{temperature}</div></td>'+
		'</tr> '+
		'<tr>'+
		'<td class="eventLocation">{location}</td> '+
		'</tr>'+
		'<tr>'+
		'<td class="ratings">{ratingObj:this.getRatingBasedOnType}</td></td>'+
		'</tr>'+
		'</table>',
		{
		getRatingBasedOnType : function(ratingObj){
		
			var ratingStr='';
			if(ratingObj['ratingType']=='type3')
					ratingStr +="<img src='resources/icons/measure.png' height=13 />    90/100";
			else
			for(var i=0;i<ratingObj['rating'];i++){
				if(ratingObj['ratingType']=='type1')
					ratingStr +="<img src='resources/icons/rating.png' class='rating-img'/>";
				else
					ratingStr +="<img src='resources/icons/rating1.png' class='rating-img' />";
				}
				
				if(ratingObj['ratingType']=='type1')
					ratingStr +='     8 Yorum';
				if(ratingObj['ratingType']=='type2')
					ratingStr ='IMDB RATING 8.6     '+ratingStr;
				
				return ratingStr;
			}	
			
		}
		),
		store:'MyEventsStore'
	}
});