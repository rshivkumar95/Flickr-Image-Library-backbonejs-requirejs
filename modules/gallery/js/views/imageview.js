define([
    'underscore',
    'backbone',
    'Image',
    'text!../../modules/gallery/gallery.html'
], function(_, Backbone, Image, gallery) {
    'use strict';
    
    var ImageView = Backbone.View.extend({
        model : new Image(),
        initialize: function() {
            this.template = _.template(gallery);
        },
        render: function() {
            this.$el= this.template(this.model.toJSON());
            return this;
        }  
    });
    return ImageView;
});