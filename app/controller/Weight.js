Ext.define('DA.controller.Weight', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            weightPanel: "weightpanel",
            weightRecordAdd: 'weightrecordaddpanel',
            weightPanelChart: "weightpanel chart",
            main: 'main'
        },
        control: {
            weightPanel: {
                newWeightRecord: "onNewWeightRecord"
            },
            weightRecordAdd: {
                backToWeightPanel: "onBackToWeightPanel",
                saveWeightRecord: "onSaveWeightRecord"
            }
        }
    },
    onNewWeightRecord: function(){
        console.log("onNewWeightRecord");
        
        var now = new Date();
        var weightRecordId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        
        var newWeightRecord = Ext.create("DA.model.Weight", {
            id: weightRecordId,
            date: new Date(),
            weight: ''
        });
        
        this.activateWeightRecordAddView(newWeightRecord)
    },
    
    getRandomInt: function(min, max){
         return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    activateWeightRecordAddView: function(record){
        
        var addRecordView = this.getWeightRecordAdd();
        addRecordView.setRecord(record);
        Ext.Viewport.animateActiveItem(addRecordView, this.slideLeftTransition);
    },
    
    onBackToWeightPanel: function(){
        Ext.Viewport.animateActiveItem(this.getMain(), this.slideRightTransition);
    },
    
    onSaveWeightRecord: function(){
        
        var addRecordView = this.getWeightRecordAdd();
        
        var currentWeightRecord = addRecordView.getRecord();
        var newValues = addRecordView.getValues();
        
        currentWeightRecord.set('date', newValues.date);
        currentWeightRecord.set('weight', newValues.weight);
        
        var errors = currentWeightRecord.validate();
        
        var weightRecordsStore = Ext.getStore("Weight");
        
        if(null == weightRecordsStore.findRecord('id', currentWeightRecord.data.id))
        {
            weightRecordsStore.add(currentWeightRecord)
        }
        
        weightRecordsStore.sync();
        
        this.onBackToWeightPanel();
        
        var chart = this.getWeightPanelChart();
        chart.redraw();
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction: 'right'},
    
    launch: function(app) {
        this.callParent(arguments);
        Ext.getStore("Weight").load();
        console.log("launch weight");
    }
});