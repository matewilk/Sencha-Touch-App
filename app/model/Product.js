Ext.define('DA.model.Product', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'date', type: 'date', dateFormat: 'c'},
            {name: 'name', type: 'string'},
            {name: 'desc', type: 'string'},
            {name: 'proteins', type: 'number'},
            {name: 'carbs', type: 'number'},
            {name: 'fats', type: 'number'},
            {name: 'quantity', type: 'numberfield'}
        ],
        validations: [
            {type: 'presence', field: 'quantity', message: 'Wpisz ilość porcji'}
        ]
    }
})


