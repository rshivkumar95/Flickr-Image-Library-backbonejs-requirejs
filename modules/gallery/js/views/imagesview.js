define([
    "underscore",
    "backbone",
    "imageModelView"
], function (_, Backbone, ImageModelView) {
    "use strict";
    var ImageCollectionView = Backbone.View.extend({
        initialize: function () {
            this.model.on("add", this.render, this);
        },
        render: function () {
            var self = this;
            this.$el.html("");
            _.each(this.model.toArray(), function (image) {
                self.$el.append(new ImageModelView({model: image}).render().$el);
            });
            return this;
        }
    });

    return ImageCollectionView;
});