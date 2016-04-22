/**
 * Created by clv on 2016/4/7.
 */
Ext.define('Gitbit.view.menu.List', {
    extend: 'Ext.Container',
    xtype: 'menulist',

    config: {
        cls: 'menu-list',
        defaults: {
            xtype: 'button',
            border: 0
        },
        items: [{
            text: 'Explore'
        }, {
            text: 'Integrations'
        }, {
            text: 'Help'
        }]
    }
});