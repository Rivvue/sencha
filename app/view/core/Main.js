Ext.define('RV.view.core.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
	autoScroll:true,
    requires: [
		'Ext.Label',
		'Ext.field.Password',
		'Ext.field.Email',
		'Ext.form.Panel'
    ],
	fullscreen:true,
	
    config: {
		style: 'background-color: #EDECE8;',
		defaults:{
			margin:'0 20 25 20',
		},
		items:[
						{
						xtype:'container',
						margin:'20 0 25 0',
						layout:{type:'vbox',align:'middle'},
						items:[
								{
									xtype: 'component',
									html: '<h2>RIVVUE</h2>',
									cls:'login-header'
								}
						]
						},
						{
							xtype:'textfield',
							clearIcon:false,
							cls:'login-fields',
							inputCls:' username-field',							
							name:'username'
						},
						{
							xtype:'passwordfield',
							clearIcon:false,
							cls:'login-fields',
							inputCls:'password-field',
							name:'password'
						},
						{
							xtype:'button',
							cls:'signin-button',
							ui:'orange',
							text:'SIGN IN'
						},
						{
						xtype:'container',
						layout:'hbox',
						items:[
								{
									xtype:'component',
									html:'<span class="forgot-password">Forgot Password?</span>'
								},
								{
									xtype:'component',
									margin:'0 0 0 20',
									html:'<span class="create-account">Create an account</span>'
								},
								{
									xtype:'component',
									flex:1
								}
							]
						},
						{
						xtype:'container',
						layout:{type:'hbox',align:'middle'},
						items:[
								{
									xtype:'component',
									margin:'0 10 0 0',
									html:'<span class="separator">OR</span>'
								},
								{
									xtype:'component',
									flex:1,
									html:'<div class="separator-line"></div>'
								}
							]
						},
						{
						xtype:'container',
						layout:{type:'hbox',align:'middle'},
						defaults:{
							margin:'0 10 0 0',
						},
						items:[
						{
									xtype:'component',
									margin:'0 10 0 0',
									html:'<span class="sign-up-link">Sign up with</span>'
								},
								{
									xtype:'button',
									ui:'fb-button',
									cls:'round-buttons',
									icon:'resources/icons/facebook_logo.png'
								},
								{
									xtype:'button',
									ui:'gmail-button',
									cls:'round-buttons',
									icon:'resources/icons/googleplus_logo.png'
								}
							]
						}
			]
}			
			
});
