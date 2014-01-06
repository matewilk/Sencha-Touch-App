Ext.define('DA.view.Weight', {
    extend: 'Ext.Panel',
    xtype: 'weightpanel',
    requires: [
        'Ext.MessageBox',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time',
        'Ext.chart.series.Area',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.interactions.ItemInfo'
    ],
    
    initialize: function() {
        
        this.callParent(arguments);

        var addBtn = {
            xtype: 'button',
            iconMask: true,
            iconCls: 'add',
            ui: 'action',
            id: "add-weight-record-btn",
            handler: this.onAddWeightRecordTap,
            scope: this
        }
        
        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Waga",
            items : [
                {
                    xtype: "spacer"
                },
                addBtn
            ]
        }

        var chart = {
            //fullscreen: true,
            //flipXY: true,
            xtype: 'chart',
            store: Ext.getStore("Weight"),
            animate: true,
            //interactions: ['panzoom', 'itemhighlight'],
            
            series: [
                {
                    type: 'line',
                    //position: 'bottom',
                    xField: 'date',
                    yField: 'weight',
                    style: {
                        //smooth: true,
//                        fill: "#94ae0a",
//                        opacity: 0.5,
//                        stroke: 'black',
//                        subStyle: {
//                            fill: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
//                        }
                        stroke: '#115fa6',
                        lineWidth: 3,
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3
                    },
                    highlightCfg: {
                        scale: 2
                    },
                    marker: {
                        type: 'circle',
                        stroke: '#0d1f96',
                        fill: '#94ae0a',
                        lineWidth: 2,
                        radius: 4,
                        shadowColor: 'rgba(0,0,0,0.7)',
                        shadowBlur: 10,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                        fx: {duration: 300}
                    }
                }
            ],
            axes: [
                {
                    type: 'numeric',
                    //position: 'top',
                    position: 'left',
                    title: 'Waga',
                    minimum: 0,
                    maximum: 200,
                    grid: {
                        fill: '#efefef',
                        odd: {
                            fill: '#cdcdcd'
                        },
                        even: {
                            lineWidth: 3
                        }
                    }
                },
                {
                    type: 'time',
                    //type: 'numeric',
                    //position: 'left',
                    position: 'bottom',
                    fields: ['date'],
                    title: 'Data',
                    grid: true,
                    style: {
                        estStepSize: 100
                    }
                }
            ],
            interactions: ['panzoom', 'itemhighlight',{
                type: 'iteminfo',
                gesture: 'tap',
                listeners: {
                    show: function(interaction, item, panel) {
                        panel.setHtml('Stock Price: $' + item.record.get('weight'));
                    }
                }
            }]
        }
        this.add([topToolbar, chart]);
    },
    
    onAddWeightRecordTap: function(){
        console.log("newWeightRecord");
        this.fireEvent("newWeightRecord", this);
    },
    
    config: {
        title: 'Waga',
        iconCls: 'speedometer1',
        layout: 'fit',
        iconMask: true
        
//        items: [
            
//            {
//                xtype: 'toolbar',
//                docked: 'bottom',
//                items: [
//                    {
//                        xtype: 'datepickerfield',
//                        maxWidth: 130,
//                        value: new Date(),
//                        destroyPickerOnHide: true
//                    },
//                    {
//                        xtype: 'spacer'
//                    },
//                    {
//                        xtype: 'numberfield',
//                        maxWidth: 120,
//                        centered: true
//                    },
//                    {
//                        xtype: 'spacer'
//                    },
//                    {
//                        xtype: 'button',
//                        text: 'dodaj'
//                    }
//                ]
//            },
            
 //       ]
    }
})


