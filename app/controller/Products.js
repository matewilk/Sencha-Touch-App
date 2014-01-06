Ext.define('DA.controller.Products', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            productsList: "productslist",
            productsListContainer: "productslistcontainer",
            productsListSearch: "productslistcontainer toolbar searchfield",
            productDetails: "productdetailspanel",
            main: 'main'
        },
        control: {
            productsListContainer: {
                viewProductDetails: "onViewProductDetails"
            },
            productDetails: {
                backToProductsListContainer: "onBackToProductsListContainer"
            }
//            productsListSearch: {
//                keyup: "onSearchProductsList"
//            }
        }
    },
    onViewProductDetails: function(list, record){
        console.log("onViewProductDetails")
        this.activateProductDetailsView(record);
    },
    
    activateProductDetailsView: function(record){
        console.log("activateProductDetailsView")
        var productDetailsView = this.getProductDetails();
        var calories = (record.get('proteins')*4)+(record.get('carbs')*4)+(record.get('fats')*9);
        record.set('calories', calories);
        productDetailsView.setRecord(record);
        Ext.Viewport.animateActiveItem(productDetailsView, this.slideLeftTransition);
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    
    onBackToProductsListContainer: function(){
        Ext.Viewport.animateActiveItem(this.getMain(), this.slideRightTransition)
    },
    
    slideRightTransition: {type: 'slide', direction: 'right'}, 
    
    onSearchProductsList: function(value){
        console.log(value.getValue());
        var productsStore = Ext.getStore("Product");
        productsStore.filter('name', value.getValue());
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.callParent(arguments);
        Ext.getStore("Product").load();
        console.log("launch products controller");
    },
    
    init: function() {
        this.control({
            'searchfield': {
                keyup: this.onSearchProductsList
            }
        });
    }
});