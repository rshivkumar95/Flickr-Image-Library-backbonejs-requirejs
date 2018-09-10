define([
    "backbone"
], function (Backbone) {
    "use strict";
    var ImageModel = Backbone.Model.extend({
        defaults: {
            farm: "",
            has_comment: "",
            id: "",
            is_primary: "",
            isfamily: "",
            isfriend: "",
            ispublic: "",
            owner: "",
            secret: "",
            server: "",
            title: "",
            url: ""
        }
    });
    return ImageModel;
});