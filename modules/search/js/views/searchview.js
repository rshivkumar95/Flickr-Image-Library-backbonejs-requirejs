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
            console.log(e.target.value);
            if(e.charCode==13 && e.target.value!=""){
                this.search();
            }

        },
        search: function(){
            if($('#'+this.options.contentWrapper+' #'+this.options.searchWrapper+' #search-term').val()!=""){
                new gallery(this.options.galleryWrapper,this.options.searchWrapper,this.options.contentWrapper);
            }
        },
        render: function() {
            console.log(this.options.contentWrapper+" rendered");
            this.$el.html(this.template());
            return this;
        }  
    });

    return SearchView;
});