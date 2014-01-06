Ext.define('DA.view.Profile', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Select'],
    xtype: 'profileform',
    
    config: {
        title: 'Profil',
        iconCls: 'user',
        
        items: [
            {
                xtype: 'fieldset',
                title: 'Szczegóły',
                
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'age',
                        label: 'Wiek'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'height',
                        label: 'Wzrost'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'wight',
                        label: 'Waga'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'goal_weight',
                        label: 'Waga docelowa'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'gender',
                        label: 'Płeć',
                        options: [
                            {text: 'Mężczyzna', value: 'male'},
                            {text: 'Kobieta', value: 'female'}
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        name: 'activity_lvl',
                        label: 'Aktywność',
                        options: [
                            {text: 'Tryb siedzący', value: 'stationary'},
                            {text: 'Niska aktywność', value: 'low'},
                            {text: 'Średnia aktywność', value: 'medium'},
                            {text: 'Wysoka aktywność', value: 'high'},
                            {text: 'Bardzo wysoka', value: 'very_high'}
                        ]
                    },
                    {
                        xtype: 'numberfield',
                        name: 'bmi',
                        label: 'BMI'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Zapisz',
                ui: 'confirm',
                handler: function(){
                    
                }
            }
        ]
    }
})


