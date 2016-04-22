/**
 * Created by clv on 2016/4/1.
 */
Ext.define('Gitbit.view.menu.Menu', {
    extend: 'Ext.Menu',

    xtype: 'mainmenu',

    config: {
        cls: 'main-menu',
        width: '70%',
        items: [{
            xtype: 'menuprofile'
        }, {
            xtype: 'menulist'
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                flex: 1,
                text: 'Settings',
                //style: {
                //    'border-right': '1px solid grey',
                //    'border-top-right-radius': 0,
                //    'border-bottom-right-radius': 0
                //}
            }, {
                text: '|'
            }, {
                flex: 1,
                text: 'Exit'
            }]
        }]
    }
});