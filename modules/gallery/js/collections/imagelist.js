define([
    'underscore',
    'backbone',
    'Image'
], function(_, Backbone, Image) {
    'use strict';
    var Images = Backbone.Collection.extend({
        model : Image,
    });

    return Images;
});