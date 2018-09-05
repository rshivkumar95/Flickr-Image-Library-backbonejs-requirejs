define([
    'underscore',
    'backbone',
    'Images',
    'Image',
    'config',
    'ImagesView'
], function(_, Backbone, Images, Image, Flickr, ImagesView) {
    'use strict';
   function loadGallery (galleryWrapper,searchWrapper,contentWrapper){
        var images = new Images();
        var imagesView = new ImagesView({
            model: images,
            el: $("#"+contentWrapper+" #"+galleryWrapper),
            searchWrapper: searchWrapper
        });
        var parameters = {
            text : $('#'+contentWrapper+' #'+searchWrapper+' #search-term').val(),
            per_page : 20
        }
        Flickr.apiCallout('flickr.photos.search',parameters).then(function(response){
        console.log(response.photos.photo); 
            _.each(response.photos.photo,function(photo){
                var image = new Image({
                    farm : photo.farm,
                    has_comment : photo.has_comment,
                    id : photo.id,
                    is_primary : photo.is_primary,
                    isfamily : photo.isfamily,
                    isfriend : photo.isfriend,
                    ispublic : photo.ispublic,
                    owner : photo.owner,
                    secret : photo.secret,
                    server : photo.server,
                    title : photo.title
                });

                images.add(image);              
            });   
        });
    }
    return loadGallery;
});