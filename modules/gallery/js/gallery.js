define([
    "underscore",
    "imageCollection",
    "imageModel",
    "config",
    "imageCollectionView"
], function (_, ImageCollection, ImageModel, Flickr, ImageCollectionView) {
    "use strict";
    var LoadGallery = function (galleryWrapper, contentWrapper, searchTerm) {
        var imageCollection = new ImageCollection();
        new ImageCollectionView({
            model: imageCollection,
            el: $("#" + contentWrapper + " #" + galleryWrapper) // any other way (?)
        });
        var parameters = {
            text: searchTerm,
            per_page: 20
        };
        Flickr.apiCallout("flickr.photos.search", parameters).then(function (response) {
            _.each(response.photos.photo, function (photo) {
                var image = new ImageModel({
                    farm: photo.farm,
                    has_comment: photo.has_comment,
                    id: photo.id,
                    is_primary: photo.is_primary,
                    isfamily: photo.isfamily,
                    isfriend: photo.isfriend,
                    ispublic: photo.ispublic,
                    owner: photo.owner,
                    secret: photo.secret,
                    server: photo.server,
                    title: photo.title
                });

                imageCollection.add(image);
            });
        });
    };
    return LoadGallery;
});