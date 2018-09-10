define([
    "underscore",
    "backbone",
    "text!../../assets/template.html",
    "searchView"
], function (_, Backbone, wrappertpl, SearchView) {
    "use strict";
    var Start = {
        StartView: Backbone.View.extend({
            template: _.template(wrappertpl),
            initialize: function () {
                this.render();
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            }  
        }),
        renderStart: function (wrapper) {
            new this.StartView({
                el: $("#" + wrapper.contentWrapper)
            });
            this.renderSearch(wrapper);
        },
        renderSearch: function (wrapper) {
            new SearchView({
                el: $("#" + wrapper.contentWrapper + " #" + wrapper.searchWrapper),
                galleryWrapper: wrapper.galleryWrapper,
                searchWrapper: wrapper.searchWrapper,
                contentWrapper: wrapper.contentWrapper
            });
        }
    };
    return Start;
});