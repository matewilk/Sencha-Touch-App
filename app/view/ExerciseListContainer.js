Ext.define('DA.view.ExerciseListContainer', {
    extend: 'Ext.Container',
    xtype: 'exerciselistcontainer',
    
    initialize: function(){
        
        this.callParent(arguments);
        
        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Wybierz ćwiczenie'
        };
        
        var exerciseList = {
            xtype: 'exerciselist',
            store: Ext.getStore("Exercises"),
            listeners: {
                disclose: {
                    fn: this.onExerciseListDisclosure,
                    scope: this
                }
            }
        }
        this.add([topToolbar, exerciseList]);
    },
    
    onExerciseListDisclosure: function(list, record, target, index, evt, opt){
        console.log('onExerciseListDisclosure');
        this.fireEvent("addExerciseToDailyCalsBalance", this, record);
    },
    
    config: {
        title: 'Ćwiczenia',
        layout: 'fit',
        iconCls: 'heart_beat',
        iconMask: true
    }
})


