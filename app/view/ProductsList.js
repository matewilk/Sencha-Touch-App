Ext.define('DA.view.ProductsList', {
    extend: 'Ext.dataview.List',
    xtype: 'productslist',
    
    config: {
        loadingText: "Loading Products...",
        emptyText: '</pre><div class="notes-list-empty-text">Nie znaleziono produktów.</div><pre>',
        onItemDisclosure: true,
        itemTpl: '</pre><div class="list-item-title">{name}</div><div class="list-item-narrative">{desc}</div><pre>',
        grouped: true
        //indexBar: true
    }
});