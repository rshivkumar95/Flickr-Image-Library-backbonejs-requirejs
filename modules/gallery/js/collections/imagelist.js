define([
    "backbone",
    "imageModel"
], function (Backbone, ImageModel) {
    "use strict";
    var ImageCollection = Backbone.Collection.extend({
        model: ImageModel
    });
    return ImageCollection;
});