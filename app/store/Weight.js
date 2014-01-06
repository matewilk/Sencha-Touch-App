Ext.define("DA.store.Weight", {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',
    config: {
        model: 'DA.model.Weight',
        autoLoad: true,
        proxy: {
            type: 'localstorage',
            id: 'weight-records-app-store'
        }
//        data: [
//            {weight: 100, date:new Date('Jan 1 2013').getTime()},
//            {weight: 98, date:new Date('Jan 5 2013').getTime()},
//            {weight: 96, date:new Date('Jan 7 2013').getTime()},
//            {weight: 95, date:new Date('Jan 14 2013').getTime()},
//            {weight: 95, date:new Date('Jan 20 2013').getTime()},
//            {weight: 92, date:new Date('Feb 1 2013').getTime()},
//            {weight: 90, date:new Date('Feb 7 2013').getTime()},
//            {weight: 87, date:new Date('Feb 13 2013').getTime()},
//            {weight: 88, date:new Date('Feb 20 2013').getTime()},
//            {weight: 86, date:new Date('Feb 25 2013').getTime()},
//            {weight: 84, date:new Date('Mar 1 2013').getTime()}
            
//            {weight: 100, date:1},
//            {weight: 98, date:4},
//            {weight: 96, date:6},
//            {weight: 95, date:9},
//            {weight: 95, date:12},
//            {weight: 92, date:16},
//            {weight: 90, date:20},
//            {weight: 87, date:22},
//            {weight: 88, date:27},
//            {weight: 86, date:30},
//            {weight: 84, date:32}
//        ]
        //sorters: [{property: 'date', direction: 'ASC'}]
    }
})


