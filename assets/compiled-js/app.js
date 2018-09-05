require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    backboneLocalstorage: {
      deps: ['backbone'],
      exports: 'Store'
    }
  },
  paths: {
    jquery: '../../node_modules/jquery/dist/jquery',
    underscore: '../../node_modules/underscore/underscore',
    backbone: '../../node_modules/backbone/backbone',
    config: 'config',
    gallery: '../../modules/gallery/js/gallery',
    search: '../../modules/search/js/search',
    Images: '../../modules/gallery/js/collections/imagelist',
    Image: '../../modules/gallery/js/models/image',
    ImageView: '../../modules/gallery/js/views/imageview',
    ImagesView: '../../modules/gallery/js/views/imagesview',
    text: '../../node_modules/text/text',
    SearchView: '../../modules/search/js/views/searchview',
    Start: 'view/startview'
  }
});

require(['gallery', 'Start'], function (gallery, Start) {
  Start.renderStart({
    contentWrapper: 'content',
    searchWrapper: 'search-area',
    galleryWrapper: 'gallery-area'
  });
  Start.renderStart({
    contentWrapper: 'content2',
    searchWrapper: 'search-area',
    galleryWrapper: 'gallery-area'
  });
  Start.renderStart({
    contentWrapper: 'content3',
    searchWrapper: 'search-area',
    galleryWrapper: 'gallery-area'
  });
  Start.renderStart({
    contentWrapper: 'content4',
    searchWrapper: 'search-area',
    galleryWrapper: 'gallery-area'
  });
});