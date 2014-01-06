Ext.define('DA.controller.Diet', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            productsListContainer: "productslistcontainer",
            exerciseListContainer: 'exerciselistcontainer',
            productDetails: "productdetailspanel",
            dietPanel: 'dietpanel',
            main: 'main'
        },
        control: {
            productDetails: {
                eatProductNow: "onEatProduct"
            },
            dietPanel: {
                addExerciseToCalsBalance: "onAddExerciseToCalsBalance",
                addProductToCalsBalance: "onAddProductToCalsBalance"
            },
            productsListContainer: {
                backToDietView: "onBackToDietView"
            }
        }
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    
    slideRightTransition: {type: 'slide', direction: 'right'}, 
    
    onBackToDietView: function(){
        this.getMain().setActiveItem('dietpanel', this.slideRightTransition);
    },
    
    onAddProductToCalsBalance: function(){
        console.log('add product to balance - controller');
        var productsList = this.getProductsListContainer();
        this.getMain().setActiveItem(productsList, this.slideLeftTransition);
    },
    
    onAddExerciseToCalsBalance: function(){
        console.log('add exercise to balance - controller');
    },
        
    onEatProduct: function(){
        console.log("product eaten");
        var productDetailsView = this.getProductDetails();
        var model = Ext.create('DA.model.Product', productDetailsView.getValues());
        //var currentProduct = productDetailsView.getRecord();
        
        var errors = model.validate();
        if(!errors.isValid()){
            Ext.Msg.alert('Błąd!', errors.getByField('quantity')[0].getMessage(), Ext.emptyFn);
            //currentProduct.reject();
            return;
        }
            
    }
});