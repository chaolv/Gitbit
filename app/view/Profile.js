/**
 * Created by clv on 2016/4/1.
 */
Ext.define('Gitbit.view.Profile', {
    extend: 'Ext.Container',

    xtype: 'profilepanel',

    config: {
        cls: 'profile-panel',
        layout: 'vbox',
        items: [{
            xtype: 'menucard',
        }, {
            xtype: 'tabpanel',
            tabbar: {

            }
        }
        //}, {
        //    xtype: 'component',
        //    tpl: ''.concat(
        //        '<img class="avatar" width="64" height="64" src="resources/icons/avatar.png"/>',
        //        '<div class="name">{name}</div>',
        //        '<div >',
        //            '<svg aria-hidden="true" class="octicon octicon-clock" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M8 8h3v2H7c-0.55 0-1-0.45-1-1V4h2v4z m-1-5.7c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z"></path></svg>',
        //            '<span>Joined on</span>',
        //            '<span>{joinTime}</span>',
        //        '</div>',
        //        '<div class="stats">',
        //            '<div class="stat"><strong class="stat-count">{followers}</strong><span>Followers</span></div>',
        //            '<div class="stat"><strong class="stat-count">{starred}</strong><span>Starred</span></div>',
        //            '<div class="stat"><strong class="stat-count">{following}</strong><span>Following</span></div>',
        //        '</div>'
        //    ),
        //    data: {
        //        name: 'Chao',
        //        joinTime: '30 Sep 2014',
        //        followers: 1,
        //        starred: 0,
        //        following: 1
        //    }
        ]
    }
});