Ext.define('DA.view.Diet', {
    extend: 'Ext.Panel',
    xtype: 'dietpanel',
    requires: [
        'Ext.chart.SpaceFillingChart',
        'Ext.chart.series.Gauge'
    ],
    
    initialize: function(){
        
        this.callParent(arguments);
        
        var gaugeChart = {
            xtype: 'spacefilling',
            store: Ext.getStore("Weight"),
            animate: {
                easing: 'elasticIn',
                duration: 1000
            },
//            axes: [{
//                type: 'gauge',
//                position: 'gauge',
//                minimum: 0,
//                maximum: 100,
//                steps: 10,
//                margin: 7
//            }],
            series: [
                {
                    type: 'gauge', 
                    minimum: 000,
                    value: 1000,
                    maximum: 2500,
                    showLegend: true,
                    steps: 10,
                    margin: 7,
                    //title: 'test',
                    //colors: ['green', 'blue', 'black'],
                    style: {
                        miterLimit: 10,
                        lineCap: 'miter',
                        lineWidth: 2
                    },
                    subStyle: {
                        fillStyle: ["#115fa6", 'lightgrey']
                    }
                }
            ]
        }
        
        var chartContainer = {
            xtype: 'container',
            layout: 'fit',
            items: [
                gaugeChart
            ]
        }
        
        var addMealBtn = {
            xtype: 'button',
            text: 'Dodaj posiłek',
            margin: '0 5 0 0',
            ui: 'action',
            style: 'font-size: 13px;',
            width: 120,
            handler: this.addProductToBalance,
            scope: this
        }
        
        var addExerciseBtn = {
            xtype: 'button',
            text: 'Dodaj ćwiczenie',
            margin: '0  0 5',
            ui: 'action',
            style: 'font-size: 13px;',
            width: 120,
            handler: this.addExerciseToBalance,
            scope: this
        }
        
        var buttonContainer = {
            xtype: 'container',
            docked: 'bottom',
            padding: '10 0 10 0',
            centered: true,
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                addMealBtn,
                addExerciseBtn
            ]
        }
        
        this.add([chartContainer, buttonContainer])
    },
    
    addProductToBalance: function(){
        this.fireEvent("addProductToCalsBalance")
    },
    
    addExerciseToBalance: function(){
        this.fireEvent("addExerciseToCalsBalance")
    },
    
    config: {
        title: 'Dieta',
        iconCls: 'address_book',
        iconMask: true,
        layout: 'vbox',
        defaults: {flex: 1}
    }
})


