Ext.define('DA.model.Weight', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'date', type: 'date' /*dateFormat: 'c'*/},
            {name: 'weight', type: 'int'}
        ]
    }
})


