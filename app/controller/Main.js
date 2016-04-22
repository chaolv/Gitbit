/**
 * Created by clv on 2016/4/6.
 */
Ext.define('Gitbit.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainPanel: 'mainpanel',
            menuButton: 'mainpanel #menu-button',
            notificationButton: 'mainpanel #notification-button',
            cardPicture: 'mainmenu #picture',
        },
        control: {
            mainPanel: {
                initialize: 'initMainPanel'
            },
            menuButton: {
                tap: 'toggleMainMenu'
            },
            notification: {
                tap: 'showNotificationPanel'
            },
            cardPicture: {
                tap: 'showProfilePanel'
            }
        }
    },

    mainMenu: Ext.create('Gitbit.view.menu.Menu'),

    initMainPanel: function() {
        Ext.Viewport.setMenu(this.mainMenu, {
            side: 'left',
            reveal: true
        });
    },

    toggleMainMenu: function() {
        Ext.Viewport.toggleMenu('left');
    },

    showNotificationPanel: function() {

    },

    showProfilePanel: function() {
        Ext.Viewport.add()
    }
});