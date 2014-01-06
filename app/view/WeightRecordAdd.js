Ext.define('DA.view.WeightRecordAdd', {
    extend: 'Ext.form.Panel',
    requires: 'Ext.form.FieldSet',
    xtype: 'weightrecordaddpanel',
    
    config: {
        scrollable: 'vartical'
    },
    
    initialize: function(){
        
        this.callParent(arguments);
        
        var backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Wróć',
            handler: this.backToWeightPanel,
            scope: this
        };
        
        var saveBtn = {
            xtype: 'button',
            ui: 'action',
            text: 'Zapisz',
            handler: this.onSaveButtonTap,
            scope: this
        };
        
        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            title: "Dodaj Rekord",
            items: [
                backBtn,
                {
                    xtype: 'spacer'
                },
                saveBtn
            ]
        };
        
        var deleteBtn = {
            xtype: 'button',
            iconCls: "trash",
            iconMask: true,
            scope: this
        };
        
        var bottomToolber = {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                deleteBtn
            ]
        };
        
        var weightField = {
            xtype: 'numberfield',
            name: 'weight',
            label: 'waga'
        };
        
        var dateField = {
            xtype: 'datepickerfield',
            name: 'date',
            label: 'data'
            //value: new Date(),
            //destroyPickerOnHide: true
        };
        
        var fieldset = {
            xtype: 'fieldset',
            items: [
                weightField,
                dateField
            ]
        };
        
        this.add([topToolbar, fieldset, bottomToolber])
    },
    backToWeightPanel: function(){
        this.fireEvent("backToWeightPanel", this);
    },
    onSaveButtonTap: function(){
        this.fireEvent("saveWeightRecord", this);
    }
})


