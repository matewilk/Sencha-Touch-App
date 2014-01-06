Ext.define('DA.view.ProductsListContainer', {
    extend: 'Ext.Container',
    xtype: 'productslistcontainer',
    requires: [
        'Ext.field.Search'
    ],
    
    initialize: function(){
        
        this.callParent(arguments);
        
        var addButton = {
            xtype: 'button',
            iconCls: 'add',
            iconMask: true,
            ui: 'action'
        };
        
        var backButton = {
            xtype: 'button',
            ui: 'back',
            text: 'Wróć',
            handler: this.backToDietView,
            scope: this
        }
        
        var searchField = {
            xtype: 'searchfield',
            itemId: 'queryfield',
            name: 'search_query',
            centered: true,
            width: 150,
            listeners: {
//                action: {
//                    fn: this.searchProducts,
//                    scope: this
//                },
                keyup: {
                    fn: this.searchProducts,
                    scope: this
                }
            }
        }
        
        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                backButton,
                searchField,
                {
                    xtype: 'spacer'
                },
                addButton
            ]
        };
        
        var productsList = {
            xtype: 'productslist',
            store: Ext.getStore("Product"),
            listeners: {
                disclose: {
                    fn: this.onProductsListDisclose, 
                    scope: this
                }
            }
        }
        this.add([topToolbar, productsList]);
    },
    
    backToDietView: function(){
        this.fireEvent("backToDietView", this);
    },
    
    onProductsListDisclose: function(list, record, target, index, evt, options){
        console.log("viewProductDetails");
        this.fireEvent('viewProductDetails', this, record)
    }, 
    
    searchProducts: function(field, e, eOpt){
        console.log("searchProductsList");
        this.fireEvent('searchProductsList', this, field.getValue())
    },
    
    config: {
        title: 'Produkty',
        layout: 'fit',
        iconCls: 'cube',
        iconMask: true
    }
})


