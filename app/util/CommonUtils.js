/**
 * Created by clv on 2016/4/11.
 */
Ext.define('Gitbit.util.CommonUtils', {
    alternateClassName: ['Gitbit.CommonUtils'],

    statics: {
        LOGIN: '/login/',
        REGISTER: '/register/',
        FOGET_PWD: '/forgetPwd/',
        MAIN: '/main/',
        MANAGEMENT: '/management/',

        BASE_PATH: '../web/',

        TIME_OUT_ALERT: null,

        addActivity: function(newActivityName, newActivityConfig, destroyedActivityName) {
            var viewport = Ext.Viewport(),
                newActivity = viewport.
            Ext.viewport.add();
        }
    },

    config: {
        activityStack: []
    },
});