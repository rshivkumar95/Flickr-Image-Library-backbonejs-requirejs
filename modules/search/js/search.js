define([
    "SearchView"
], function (SearchView) {
    "use strict";
    var Search = {
        renderSearch : function (wrapper) {
            console.log(wrapper);
            new SearchView({
                el: $("#" + wrapper.searchWrapper),
                galleryWrapper: wrapper.galleryWrapper,
                searchWrapper: wrapper.searchWrapper
            });
        }
    };
    return Search;
});