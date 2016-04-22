/**
 * Created by clv on 2016/4/7.
 */
Ext.define('Gitbit.view.menu.Card', {
    extend: 'Ext.Container',
    xtype: 'menucard',

    config: {
        cls: 'menu-card',
        items:[{
            xtype: 'img',
            itemId: 'picture',
            src: 'resources/icons/avatar.png',
            width: 64,
            height: 64
        }, {
            xtype: 'label',
            itemId: 'username',
            value: 'Chao'
        }, {
            xtype: 'label',
            itemId: 'joined-time',
            html: 'Joined on',
        }, {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                flex: 1
            },
            items: [{
                itemId: 'followers',
                items: [{
                    xtype: 'label',
                    itemId: 'count',
                    html: 0
                }, {
                    xtype: 'label',
                    itemId: 'type',
                    html: 'Followers'
                }]
            }, {
                itemId: 'starred',
                items: [{
                    xtype: 'label',
                    itemId: 'count',
                    html: 0
                }, {
                    xtype: 'label',
                    itemId: 'type',
                    html: 'Starred'
                }]
            }, {
                itemId: 'following',
                items: [{
                    xtype: 'label',
                    itemId: 'count',
                    html: 0
                }, {
                    xtype: 'label',
                    itemId: 'type',
                    html: 'Following'
                }]
            }]
        }]
    }
});