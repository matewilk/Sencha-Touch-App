Ext.define('DA.controller.Exercises', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.Anim'
    ],
    config: {
        refs: {
            exerciseList: 'exerciselist',
            exerciseListContainer: 'exerciselistcontainer'
        },
        control: {
            exerciseListContainer: {
                addExerciseToDailyCalsBalance: "onAddExerciseToDailyCalsBalance"
            },
            exerciseList: {
                itemtap: "onExerciseItemTap"
            }
        }
    },
    
    onAddExerciseToDailyCalsBalance: function(){
        console.log('exercise disclose tap controller')
    },
    
    onExerciseItemTap: function(view, index, item, e, eObj){
        console.log(e.get('name'));
        var el = Ext.get(item.id)
        
        var div = el.select('div.hidden');
        div.toggleCls('list-item-hidden');
        //div.show(true);
        item.setHeight(300);
//        Ext.Anim.run(item, 'pop', {
//            out: false,
//            from: {height: 70},
//            to: {height: 120}
//        });
        var xxxyyy;
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.callParent(arguments);
        Ext.getStore("Exercises").load();
        console.log("launch exercises controller");
    }
});