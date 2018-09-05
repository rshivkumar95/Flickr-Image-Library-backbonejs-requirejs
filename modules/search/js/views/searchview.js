define([
    'underscore',
    'backbone',
    'text!../../modules/search/search.html',
    'gallery'
], function(_, Backbone, searchtpl, gallery) {
    'use strict';
    
    var SearchView = Backbone.View.extend({
        template : _.template(searchtpl),
        events:{
            'keypress #search-term' : 'onEnter',
            'click #search-btn' : 'search'
        },
        initialize: function(options) {
            this.options = options;
            this.render();
        },
        onEnter: function(e){
            if(e.charCode==13 && $('#'+this.options.searchWrapper+' #search-term').val()!=""){
                this.search();
            }

        },
        search: function(){
            if($('#'+this.options.searchWrapper+' #search-term').val()!=""){
                new gallery(this.options.galleryWrapper);
            }
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        }  
    });

    return SearchView;
});