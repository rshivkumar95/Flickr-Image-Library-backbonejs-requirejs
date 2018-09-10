define([
    "underscore",
    "backbone",
    "imageModel",
    "text!../../modules/gallery/gallery.html"
], function (_, Backbone, ImageModel, gallery) {
    "use strict";
    var ImageModelView = Backbone.View.extend({
        model: new ImageModel(),
        initialize: function () {
            this.template = _.template(gallery);
        },
        render: function () {
            this.$el= this.template(this.model.toJSON());
            return this;
        }  
    });
    return ImageModelView;
});