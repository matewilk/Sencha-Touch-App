Ext.define('DA.store.Exercises',{
    extend: 'Ext.data.Store',
    
    config: {
        model: 'DA.model.Exercises',
        data: [
            {name: 'marsz', cals: '200'},
            {name: 'bieg', cals: '300'},
            {name: 'sprint', cals: '500'},
            {name: 'pływanie', cals: '350'},
            {name: 'seks', cals: '270'}
        ]
    }
});