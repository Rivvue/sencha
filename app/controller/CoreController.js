Ext.define('RV.controller.CoreController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginForm: 'signin' 
        },
		views:[
			'core.Main',
			'core.SignIn',
			'core.Home',
			'core.CalenderPageNavigation',
			'core.CalenderPage',
			'core.ActivityFeedView',
			'core.FullCalenderView',
			'core.ButtonList'
			],
		models:[
			
		],
		stores:[
			
		],
        control: {
            'signin button[action=signIn]': {
                tap: 'doLogin'
            }
        }
    },

    doLogin: function() {
	 Ext.Viewport.removeAll();
     Ext.Viewport.add(Ext.create('RV.view.core.Home'));
    }
});