Ext.define('DA.view.ProductDetails',{
    extend: 'Ext.form.Panel',
    xtype: 'productdetailspanel',
    
    initialize: function(){
        
        this.callParent(arguments);
        
        var backBtn = {
            xtype: 'button',
            ui: 'back',
            text: 'Wróć',
            handler: this.backToProductsListContainer,
            scope: this
        };
        
        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Szczegóły',
            items: [
                backBtn
            ]
        };
        
        var name = {
            xtype: 'textfield',
            name: 'name',
            label: 'Nazwa',
            readOnly: true
        };
        
        var desc = {
            xtype: 'textareafield',
            name: 'desc',
            label: 'Opis',
            readOnly: true
        };
        
        var portion = {
            xtype: 'textfield',
            name: 'portion',
            label: 'Porcja',
            value: '100g',
            readOnly: true
        }
        
        var proteins = {
            xtype: 'numberfield',
            name: 'proteins',
            label: 'Białka',
            readOnly: true
        };
        
        var carbs = {
            xtype: 'numberfield',
            name: 'carbs',
            label: 'Węglowodany',
            readOnly: true
        };
        
        var fats = {
            xtype: 'numberfield',
            name: 'fats',
            label: 'Tłuszcze',
            readOnly: true
        };
        
        var calories = {
            xtype: 'numberfield',
            name: 'calories',
            label: 'Kalorie',
            readOnly: true
        }
        
        var fieldset = {
            xtype: 'fieldset',
            items: [
                name,
                portion,
                proteins,
                carbs,
                fats,
                calories,
                desc
            ]
        }
        
        var quantity = {
            xtype: 'numberfield',
            name: 'quantity',
            label: 'Ilość porcji',
            allowBlank: false,
            required: true
        }
        
        var quantityFieldset = {
            xtype: 'fieldset',
            items: [
                quantity
            ]
        }
        
        var eatProductBtn = {
            xtype: 'button',
            ui: 'action',
            text: 'Skonsumuj',
            handler: this.eatProduct,
            scope: this
        }
        
        this.add([topToolbar, fieldset, quantityFieldset, eatProductBtn])
    },
    
    backToProductsListContainer: function(){
        this.fireEvent("backToProductsListContainer", this);
    },
    
    eatProduct: function(){
        this.fireEvent("eatProductNow", this);
    }
})


