Ext.define('DA.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
            scrollable: 'horizontal',
            directionLock: true
        },
        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'dietpanel'
            },
            {
                xtype: 'productslistcontainer'
            },
            {
                xtype: 'exerciselistcontainer'
            },
            {
                xtype: 'weightpanel'
            },
            {
                xtype: 'profileform'
            }
        ]
    }
});
