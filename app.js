//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'DA': 'app'
});
//</debug>

Ext.application({
    controllers: ["Exercises","Diet","Products","Weight"],

    name: 'DA',

    requires: [
        'Ext.field.DatePicker'
    ],
    
    models: ['Product', 'Weight', 'Exercises'],
    stores: ['Product', 'Weight', 'Exercises'],
    views: [
        'Main', 
        'Home', 
        'Weight', 
        'Profile', 
        'ProductsListContainer', 'ProductsList', 'WeightRecordAdd', 'ProductDetails', 
        'Diet', 
        'ExerciseListContainer', 'ExerciseList'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        var weightRecordAdd = {
            xtype: 'weightrecordaddpanel'
        }
        
        var productDetails = {
            xtype: 'productdetailspanel'
        }
        // Initialize the main view
        Ext.Viewport.add([Ext.create('DA.view.Main'), weightRecordAdd, productDetails]);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
