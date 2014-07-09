Ext.define('RV.controller.EventsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            eventsDataView: 'eventsdataview' 
        },
		views:[
			'events.EventsDataView',
			'events.EventTagDataView',
			'events.CreateEvent',
			'events.ViewAnEvent',
			'events.ParticipantsList'
		],
		models:[
			'EventsModel',
			'ParticipantsModel'
		],
		stores:[
			'MyEventsStore',
			'EventTagStore',
			'ParticipantsStore'
		],
        control: {
            'calenderpage button[action=createEvent]': {
                tap: 'createEvent'
            }
        }
    },
	
	createEvent : function(){
		this.getEventsDataView().removeAll();
		this.getEventsDataView().add({xtype:'createevent'});
	}
});