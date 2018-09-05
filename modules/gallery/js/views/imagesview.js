define([
    'underscore',
    'backbone',
    'Images',
    'Image',
    'ImageView'
], function(_, Backbone, Images, Image, ImageView) {
    'use strict';
    
    var ImagesView = Backbone.View.extend({
        initialize: function() {
            this.model.on("add", this.render, this);

        },
        render: function() {
            var self = this;
            this.$el.html('');
            _.each(this.model.toArray(), function(image){
                self.$el.append((new ImageView({model : image}).render().$el));
            });
            return this;
        }  
    });

    return ImagesView;
});