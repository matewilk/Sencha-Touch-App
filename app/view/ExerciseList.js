Ext.define('DA.view.ExerciseList',{
    extend: 'Ext.dataview.List',
    xtype: 'exerciselist',
    
    
    config: {
        itemCls: 'exercise-list-item',
        loadingText: 'Loading Exercises...',
        emptyText: '</pre><div class="notes-list-empty-text">Nie znaleziono ćwiczeń.</div><pre>',
        onItemDisclosure: true,
        itemTpl: '</pre><div class="list-item-title">{name}</div><div class="list-item-hidden hidden">{cals}</div><pre>'
        //grouped: true
    }
});