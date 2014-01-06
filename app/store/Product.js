Ext.define('DA.store.Product',{
    extend: 'Ext.data.Store',
    //requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: 'DA.model.Product',
        grouper: function(record){
            return record.get('name')[0];
        },
        data: [
            {name: 'pierś z kurczaka', desc: 'pierś z kurczaka hodowanego genetycznie', proteins: '20', carbs: 0.5, fats: 1},
            {name: 'pierś z indyka', desc: 'pierś z indyka królewskiego', proteins: '22', carbs: 0.2, fats: 1.5},
            {name: 'rodzynki', desc: 'rodzynki długo suszone', proteins: 4, carbs: 56, fats: 0},
            {name: 'schab', desc: 'schab z tuszy świńskiej', proteins: '18', carbs: 0.2, fats: 12},
            {name: 'ryż biały', desc: 'ryż biały z upraw chińskich', proteins: 7.5, carbs: 78, fats: 0}
        ],
//        proxy: {
//            type: 'localstorage',
//            id: 'products-app-store'
//        },
        sorters: [{property: 'name', direction: 'ASC'}]
    }
})


