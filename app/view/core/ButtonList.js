Ext.define('RV.view.core.ButtonList', {
    extend: 'Ext.List',
	xtype: 'buttonlist',
            config: {
                /**
                 * @cfg {Array} buttonTpl The template to be used to render the button.
                 */
                buttonTpl: [
                    '<div class="x-button x-button-small x-iconalign-center x-list-button">',
                        '<span class="x-button-icon x-icon-mask add"></span>',
                    '</div>'
                ]
            },

            applyButtonTpl: function(buttonTpl) {
                if (Ext.isArray(buttonTpl)) {
                    return buttonTpl.join('');
                }
                return buttonTpl;
            },

            updateButtonTpl: function(buttonTpl) {
                this.setItemTpl('{name}' + (buttonTpl || ''));
            },

            onItemTouchStart: function(list, node, index, e) {
                var target = e.getTarget('.x-button');
                if (target) {
                    Ext.fly(target).addCls('x-button-pressed');
                }

                this.callParent(arguments);
            },

            onItemTouchEnd: function(list, node) {
                node.down('.x-button').removeCls('x-button-pressed');
            },

            onItemTap: function(list, node, index, e) {
                if (e.getTarget('.x-button')) {
                    this.fireEvent('buttontap', this, this.getStore().getAt(index), node, e);
                }

                this.callParent(arguments);
            }
        });
