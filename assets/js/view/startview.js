define([
    'underscore',
    'backbone',
    'text!../../assets/template.html',
    'SearchView'
], function(_, Backbone, searchtpl, SearchView) {
    'use strict';
    var Start = {
        StartView : Backbone.View.extend({
            template : _.template(searchtpl),
            initialize: function() {
                this.render();
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }  
        }),
        renderStart : function(wrapper){
            new this.StartView({
                el: $("#"+wrapper.contentWrapper)
            });
            this.renderSearch(wrapper);
        },
        renderSearch : function(wrapper){
            //
            new SearchView({
                el: $("#"+wrapper.searchWrapper),
                galleryWrapper: wrapper.galleryWrapper,
                searchWrapper : wrapper.searchWrapper
            });
        }
    }
    return Start;
});