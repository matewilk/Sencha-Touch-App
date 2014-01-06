Ext.define('DA.model.Exercises',{
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'string'},
            {name: 'cals', type: 'int'}
        ]
    }
});